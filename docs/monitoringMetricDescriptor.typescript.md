# `google_monitoring_metric_descriptor`

Refer to the Terraform Registory for docs: [`google_monitoring_metric_descriptor`](https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor).

# `monitoringMetricDescriptor` Submodule <a name="`monitoringMetricDescriptor` Submodule" id="@cdktf/provider-google.monitoringMetricDescriptor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringMetricDescriptor <a name="MonitoringMetricDescriptor" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor google_monitoring_metric_descriptor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

new monitoringMetricDescriptor.MonitoringMetricDescriptor(scope: Construct, id: string, config: MonitoringMetricDescriptorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig">MonitoringMetricDescriptorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig">MonitoringMetricDescriptorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels"></a>

```typescript
public putLabels(value: IResolvable | MonitoringMetricDescriptorLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata"></a>

```typescript
public putMetadata(value: MonitoringMetricDescriptorMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitoringMetricDescriptorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage"></a>

```typescript
public resetLaunchStage(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit"></a>

```typescript
public resetUnit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes">monitoredResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput">launchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput">metricKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind">metricKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels"></a>

```typescript
public readonly labels: MonitoringMetricDescriptorLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata"></a>

```typescript
public readonly metadata: MonitoringMetricDescriptorMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a>

---

##### `monitoredResourceTypes`<sup>Required</sup> <a name="monitoredResourceTypes" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes"></a>

```typescript
public readonly monitoredResourceTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringMetricDescriptorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | MonitoringMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>[]

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput"></a>

```typescript
public readonly launchStageInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput"></a>

```typescript
public readonly metadataInput: MonitoringMetricDescriptorMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `metricKindInput`<sup>Optional</sup> <a name="metricKindInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput"></a>

```typescript
public readonly metricKindInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitoringMetricDescriptorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind"></a>

```typescript
public readonly metricKind: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringMetricDescriptorConfig <a name="MonitoringMetricDescriptorConfig" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

const monitoringMetricDescriptorConfig: monitoringMetricDescriptor.MonitoringMetricDescriptorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description">description</a></code> | <code>string</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName">displayName</a></code> | <code>string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind">metricKind</a></code> | <code>string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type">type</a></code> | <code>string</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType">valueType</a></code> | <code>string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage">launchStage</a></code> | <code>string</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit">unit</a></code> | <code>string</code> | The units in which the metric value is reported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#display_name MonitoringMetricDescriptor#display_name}

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind"></a>

```typescript
public readonly metricKind: string;
```

- *Type:* string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#metric_kind MonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#type MonitoringMetricDescriptor#type}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | MonitoringMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#labels MonitoringMetricDescriptor#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#launch_stage MonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata"></a>

```typescript
public readonly metadata: MonitoringMetricDescriptorMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#metadata MonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringMetricDescriptorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#timeouts MonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#unit MonitoringMetricDescriptor#unit}

---

### MonitoringMetricDescriptorLabels <a name="MonitoringMetricDescriptorLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

const monitoringMetricDescriptorLabels: monitoringMetricDescriptor.MonitoringMetricDescriptorLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key">key</a></code> | <code>string</code> | The key for this label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description">description</a></code> | <code>string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType">valueType</a></code> | <code>string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for this label.

The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#key MonitoringMetricDescriptor#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

### MonitoringMetricDescriptorMetadata <a name="MonitoringMetricDescriptorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

const monitoringMetricDescriptorMetadata: monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay">ingestDelay</a></code> | <code>string</code> | The delay of data points caused by ingestion. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod">samplePeriod</a></code> | <code>string</code> | The sampling period of metric data points. |

---

##### `ingestDelay`<sup>Optional</sup> <a name="ingestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay"></a>

```typescript
public readonly ingestDelay: string;
```

- *Type:* string

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#ingest_delay MonitoringMetricDescriptor#ingest_delay}

---

##### `samplePeriod`<sup>Optional</sup> <a name="samplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod"></a>

```typescript
public readonly samplePeriod: string;
```

- *Type:* string

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#sample_period MonitoringMetricDescriptor#sample_period}

---

### MonitoringMetricDescriptorTimeouts <a name="MonitoringMetricDescriptorTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

const monitoringMetricDescriptorTimeouts: monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringMetricDescriptorLabelsList <a name="MonitoringMetricDescriptorLabelsList" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

new monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get"></a>

```typescript
public get(index: number): MonitoringMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>[]

---


### MonitoringMetricDescriptorLabelsOutputReference <a name="MonitoringMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

new monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType"></a>

```typescript
public resetValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringMetricDescriptorLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>

---


### MonitoringMetricDescriptorMetadataOutputReference <a name="MonitoringMetricDescriptorMetadataOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

new monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay">resetIngestDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod">resetSamplePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestDelay` <a name="resetIngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay"></a>

```typescript
public resetIngestDelay(): void
```

##### `resetSamplePeriod` <a name="resetSamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod"></a>

```typescript
public resetSamplePeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput">ingestDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput">samplePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay">ingestDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod">samplePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestDelayInput`<sup>Optional</sup> <a name="ingestDelayInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput"></a>

```typescript
public readonly ingestDelayInput: string;
```

- *Type:* string

---

##### `samplePeriodInput`<sup>Optional</sup> <a name="samplePeriodInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput"></a>

```typescript
public readonly samplePeriodInput: string;
```

- *Type:* string

---

##### `ingestDelay`<sup>Required</sup> <a name="ingestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay"></a>

```typescript
public readonly ingestDelay: string;
```

- *Type:* string

---

##### `samplePeriod`<sup>Required</sup> <a name="samplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod"></a>

```typescript
public readonly samplePeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringMetricDescriptorMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---


### MonitoringMetricDescriptorTimeoutsOutputReference <a name="MonitoringMetricDescriptorTimeoutsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitoringMetricDescriptor } from '@cdktf/provider-google'

new monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringMetricDescriptorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---



