# `loggingMetric` Submodule <a name="`loggingMetric` Submodule" id="@cdktf/provider-google.loggingMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingMetric <a name="LoggingMetric" id="@cdktf/provider-google.loggingMetric.LoggingMetric"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_metric google_logging_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetric(scope: Construct, id: string, config: LoggingMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig">LoggingMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig">LoggingMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions">putBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor">putMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketOptions">resetBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetLabelExtractors">resetLabelExtractors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetMetricDescriptor">resetMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetValueExtractor">resetValueExtractor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBucketOptions` <a name="putBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions"></a>

```typescript
public putBucketOptions(value: LoggingMetricBucketOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---

##### `putMetricDescriptor` <a name="putMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor"></a>

```typescript
public putMetricDescriptor(value: LoggingMetricMetricDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts"></a>

```typescript
public putTimeouts(value: LoggingMetricTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketOptions` <a name="resetBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketOptions"></a>

```typescript
public resetBucketOptions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabelExtractors` <a name="resetLabelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetLabelExtractors"></a>

```typescript
public resetLabelExtractors(): void
```

##### `resetMetricDescriptor` <a name="resetMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetMetricDescriptor"></a>

```typescript
public resetMetricDescriptor(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueExtractor` <a name="resetValueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetValueExtractor"></a>

```typescript
public resetValueExtractor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

loggingMetric.LoggingMetric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

loggingMetric.LoggingMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

loggingMetric.LoggingMetric.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions">bucketOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor">metricDescriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput">bucketOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput">labelExtractorsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput">metricDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput">valueExtractorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors">labelExtractors</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor">valueExtractor</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketOptions`<sup>Required</sup> <a name="bucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions"></a>

```typescript
public readonly bucketOptions: LoggingMetricBucketOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a>

---

##### `metricDescriptor`<sup>Required</sup> <a name="metricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor"></a>

```typescript
public readonly metricDescriptor: LoggingMetricMetricDescriptorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingMetricTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketOptionsInput`<sup>Optional</sup> <a name="bucketOptionsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput"></a>

```typescript
public readonly bucketOptionsInput: LoggingMetricBucketOptions;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelExtractorsInput`<sup>Optional</sup> <a name="labelExtractorsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput"></a>

```typescript
public readonly labelExtractorsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricDescriptorInput`<sup>Optional</sup> <a name="metricDescriptorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput"></a>

```typescript
public readonly metricDescriptorInput: LoggingMetricMetricDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LoggingMetricTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a> | cdktf.IResolvable

---

##### `valueExtractorInput`<sup>Optional</sup> <a name="valueExtractorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput"></a>

```typescript
public readonly valueExtractorInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labelExtractors`<sup>Required</sup> <a name="labelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors"></a>

```typescript
public readonly labelExtractors: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `valueExtractor`<sup>Required</sup> <a name="valueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor"></a>

```typescript
public readonly valueExtractor: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingMetricBucketOptions <a name="LoggingMetricBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricBucketOptions: loggingMetric.LoggingMetricBucketOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets">explicitBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | explicit_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets">exponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | exponential_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets">linearBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | linear_buckets block. |

---

##### `explicitBuckets`<sup>Optional</sup> <a name="explicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets"></a>

```typescript
public readonly explicitBuckets: LoggingMetricBucketOptionsExplicitBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

explicit_buckets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#explicit_buckets LoggingMetric#explicit_buckets}

---

##### `exponentialBuckets`<sup>Optional</sup> <a name="exponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets"></a>

```typescript
public readonly exponentialBuckets: LoggingMetricBucketOptionsExponentialBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

exponential_buckets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#exponential_buckets LoggingMetric#exponential_buckets}

---

##### `linearBuckets`<sup>Optional</sup> <a name="linearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets"></a>

```typescript
public readonly linearBuckets: LoggingMetricBucketOptionsLinearBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

linear_buckets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#linear_buckets LoggingMetric#linear_buckets}

---

### LoggingMetricBucketOptionsExplicitBuckets <a name="LoggingMetricBucketOptionsExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricBucketOptionsExplicitBuckets: loggingMetric.LoggingMetricBucketOptionsExplicitBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds">bounds</a></code> | <code>number[]</code> | The values must be monotonically increasing. |

---

##### `bounds`<sup>Required</sup> <a name="bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds"></a>

```typescript
public readonly bounds: number[];
```

- *Type:* number[]

The values must be monotonically increasing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bounds LoggingMetric#bounds}

---

### LoggingMetricBucketOptionsExponentialBuckets <a name="LoggingMetricBucketOptionsExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricBucketOptionsExponentialBuckets: loggingMetric.LoggingMetricBucketOptionsExponentialBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor">growthFactor</a></code> | <code>number</code> | Must be greater than 1. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>number</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale">scale</a></code> | <code>number</code> | Must be greater than 0. |

---

##### `growthFactor`<sup>Optional</sup> <a name="growthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor"></a>

```typescript
public readonly growthFactor: number;
```

- *Type:* number

Must be greater than 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#growth_factor LoggingMetric#growth_factor}

---

##### `numFiniteBuckets`<sup>Optional</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets"></a>

```typescript
public readonly numFiniteBuckets: number;
```

- *Type:* number

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#scale LoggingMetric#scale}

---

### LoggingMetricBucketOptionsLinearBuckets <a name="LoggingMetricBucketOptionsLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricBucketOptionsLinearBuckets: loggingMetric.LoggingMetricBucketOptionsLinearBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>number</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset">offset</a></code> | <code>number</code> | Lower bound of the first bucket. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width">width</a></code> | <code>number</code> | Must be greater than 0. |

---

##### `numFiniteBuckets`<sup>Optional</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets"></a>

```typescript
public readonly numFiniteBuckets: number;
```

- *Type:* number

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Lower bound of the first bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#offset LoggingMetric#offset}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#width LoggingMetric#width}

---

### LoggingMetricConfig <a name="LoggingMetricConfig" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricConfig: loggingMetric.LoggingMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter">filter</a></code> | <code>string</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name">name</a></code> | <code>string</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName">bucketName</a></code> | <code>string</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions">bucketOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description">description</a></code> | <code>string</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#id LoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors">labelExtractors</a></code> | <code>{[ key: string ]: string}</code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor">metricDescriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#project LoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor">valueExtractor</a></code> | <code>string</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#filter LoggingMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#name LoggingMetric#name}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bucket_name LoggingMetric#bucket_name}

---

##### `bucketOptions`<sup>Optional</sup> <a name="bucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions"></a>

```typescript
public readonly bucketOptions: LoggingMetricBucketOptions;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bucket_options LoggingMetric#bucket_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#description LoggingMetric#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#disabled LoggingMetric#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#id LoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelExtractors`<sup>Optional</sup> <a name="labelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors"></a>

```typescript
public readonly labelExtractors: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#label_extractors LoggingMetric#label_extractors}

---

##### `metricDescriptor`<sup>Optional</sup> <a name="metricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor"></a>

```typescript
public readonly metricDescriptor: LoggingMetricMetricDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#metric_descriptor LoggingMetric#metric_descriptor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#project LoggingMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingMetricTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#timeouts LoggingMetric#timeouts}

---

##### `valueExtractor`<sup>Optional</sup> <a name="valueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor"></a>

```typescript
public readonly valueExtractor: string;
```

- *Type:* string

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_extractor LoggingMetric#value_extractor}

---

### LoggingMetricMetricDescriptor <a name="LoggingMetricMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricMetricDescriptor: loggingMetric.LoggingMetricMetricDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind">metricKind</a></code> | <code>string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType">valueType</a></code> | <code>string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName">displayName</a></code> | <code>string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit">unit</a></code> | <code>string</code> | The unit in which the metric value is reported. |

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind"></a>

```typescript
public readonly metricKind: string;
```

- *Type:* string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#metric_kind LoggingMetric#metric_kind}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_type LoggingMetric#value_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case 
without an ending period, for example "Request count". This field is optional but it is 
recommended to be set for any metrics associated with user-visible concepts, such as Quota.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#display_name LoggingMetric#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels"></a>

```typescript
public readonly labels: IResolvable | LoggingMetricMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#labels LoggingMetric#labels}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit in which the metric value is reported.

It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#unit LoggingMetric#unit}

---

### LoggingMetricMetricDescriptorLabels <a name="LoggingMetricMetricDescriptorLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricMetricDescriptorLabels: loggingMetric.LoggingMetricMetricDescriptorLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key">key</a></code> | <code>string</code> | The label key. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description">description</a></code> | <code>string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType">valueType</a></code> | <code>string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#key LoggingMetric#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#description LoggingMetric#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_type LoggingMetric#value_type}

---

### LoggingMetricTimeouts <a name="LoggingMetricTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

const loggingMetricTimeouts: loggingMetric.LoggingMetricTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#create LoggingMetric#create}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#delete LoggingMetric#delete}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#update LoggingMetric#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#create LoggingMetric#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#delete LoggingMetric#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#update LoggingMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingMetricBucketOptionsExplicitBucketsOutputReference <a name="LoggingMetricBucketOptionsExplicitBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput">boundsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds">bounds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boundsInput`<sup>Optional</sup> <a name="boundsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput"></a>

```typescript
public readonly boundsInput: number[];
```

- *Type:* number[]

---

##### `bounds`<sup>Required</sup> <a name="bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds"></a>

```typescript
public readonly bounds: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingMetricBucketOptionsExplicitBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---


### LoggingMetricBucketOptionsExponentialBucketsOutputReference <a name="LoggingMetricBucketOptionsExponentialBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetGrowthFactor">resetGrowthFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetNumFiniteBuckets">resetNumFiniteBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetScale">resetScale</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrowthFactor` <a name="resetGrowthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetGrowthFactor"></a>

```typescript
public resetGrowthFactor(): void
```

##### `resetNumFiniteBuckets` <a name="resetNumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetNumFiniteBuckets"></a>

```typescript
public resetNumFiniteBuckets(): void
```

##### `resetScale` <a name="resetScale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetScale"></a>

```typescript
public resetScale(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput">growthFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput">numFiniteBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput">scaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor">growthFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale">scale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `growthFactorInput`<sup>Optional</sup> <a name="growthFactorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput"></a>

```typescript
public readonly growthFactorInput: number;
```

- *Type:* number

---

##### `numFiniteBucketsInput`<sup>Optional</sup> <a name="numFiniteBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput"></a>

```typescript
public readonly numFiniteBucketsInput: number;
```

- *Type:* number

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput"></a>

```typescript
public readonly scaleInput: number;
```

- *Type:* number

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor"></a>

```typescript
public readonly growthFactor: number;
```

- *Type:* number

---

##### `numFiniteBuckets`<sup>Required</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets"></a>

```typescript
public readonly numFiniteBuckets: number;
```

- *Type:* number

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingMetricBucketOptionsExponentialBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---


### LoggingMetricBucketOptionsLinearBucketsOutputReference <a name="LoggingMetricBucketOptionsLinearBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetNumFiniteBuckets">resetNumFiniteBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumFiniteBuckets` <a name="resetNumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetNumFiniteBuckets"></a>

```typescript
public resetNumFiniteBuckets(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput">numFiniteBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numFiniteBucketsInput`<sup>Optional</sup> <a name="numFiniteBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput"></a>

```typescript
public readonly numFiniteBucketsInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `numFiniteBuckets`<sup>Required</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets"></a>

```typescript
public readonly numFiniteBuckets: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingMetricBucketOptionsLinearBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---


### LoggingMetricBucketOptionsOutputReference <a name="LoggingMetricBucketOptionsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricBucketOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets">putExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets">putExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets">putLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExplicitBuckets">resetExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExponentialBuckets">resetExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetLinearBuckets">resetLinearBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExplicitBuckets` <a name="putExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets"></a>

```typescript
public putExplicitBuckets(value: LoggingMetricBucketOptionsExplicitBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `putExponentialBuckets` <a name="putExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets"></a>

```typescript
public putExponentialBuckets(value: LoggingMetricBucketOptionsExponentialBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `putLinearBuckets` <a name="putLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets"></a>

```typescript
public putLinearBuckets(value: LoggingMetricBucketOptionsLinearBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---

##### `resetExplicitBuckets` <a name="resetExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExplicitBuckets"></a>

```typescript
public resetExplicitBuckets(): void
```

##### `resetExponentialBuckets` <a name="resetExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExponentialBuckets"></a>

```typescript
public resetExponentialBuckets(): void
```

##### `resetLinearBuckets` <a name="resetLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetLinearBuckets"></a>

```typescript
public resetLinearBuckets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets">explicitBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets">exponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets">linearBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput">explicitBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput">exponentialBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput">linearBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `explicitBuckets`<sup>Required</sup> <a name="explicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets"></a>

```typescript
public readonly explicitBuckets: LoggingMetricBucketOptionsExplicitBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a>

---

##### `exponentialBuckets`<sup>Required</sup> <a name="exponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets"></a>

```typescript
public readonly exponentialBuckets: LoggingMetricBucketOptionsExponentialBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a>

---

##### `linearBuckets`<sup>Required</sup> <a name="linearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets"></a>

```typescript
public readonly linearBuckets: LoggingMetricBucketOptionsLinearBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a>

---

##### `explicitBucketsInput`<sup>Optional</sup> <a name="explicitBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput"></a>

```typescript
public readonly explicitBucketsInput: LoggingMetricBucketOptionsExplicitBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `exponentialBucketsInput`<sup>Optional</sup> <a name="exponentialBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput"></a>

```typescript
public readonly exponentialBucketsInput: LoggingMetricBucketOptionsExponentialBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `linearBucketsInput`<sup>Optional</sup> <a name="linearBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput"></a>

```typescript
public readonly linearBucketsInput: LoggingMetricBucketOptionsLinearBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingMetricBucketOptions;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---


### LoggingMetricMetricDescriptorLabelsList <a name="LoggingMetricMetricDescriptorLabelsList" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricMetricDescriptorLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get"></a>

```typescript
public get(index: number): LoggingMetricMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingMetricMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>[]

---


### LoggingMetricMetricDescriptorLabelsOutputReference <a name="LoggingMetricMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetValueType"></a>

```typescript
public resetValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingMetricMetricDescriptorLabels | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a> | cdktf.IResolvable

---


### LoggingMetricMetricDescriptorOutputReference <a name="LoggingMetricMetricDescriptorOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricMetricDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels"></a>

```typescript
public putLabels(value: IResolvable | LoggingMetricMetricDescriptorLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput">metricKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind">metricKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels"></a>

```typescript
public readonly labels: LoggingMetricMetricDescriptorLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | LoggingMetricMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>[]

---

##### `metricKindInput`<sup>Optional</sup> <a name="metricKindInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput"></a>

```typescript
public readonly metricKindInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind"></a>

```typescript
public readonly metricKind: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingMetricMetricDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---


### LoggingMetricTimeoutsOutputReference <a name="LoggingMetricTimeoutsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer"></a>

```typescript
import { loggingMetric } from '@cdktf/provider-google'

new loggingMetric.LoggingMetricTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingMetricTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a> | cdktf.IResolvable

---



