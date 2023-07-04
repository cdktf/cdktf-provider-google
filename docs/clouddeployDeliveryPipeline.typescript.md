# `google_clouddeploy_delivery_pipeline`

Refer to the Terraform Registory for docs: [`google_clouddeploy_delivery_pipeline`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline).

# `clouddeployDeliveryPipeline` Submodule <a name="`clouddeployDeliveryPipeline` Submodule" id="@cdktf/provider-google.clouddeployDeliveryPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployDeliveryPipeline <a name="ClouddeployDeliveryPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline(scope: Construct, id: string, config: ClouddeployDeliveryPipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig">ClouddeployDeliveryPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig">ClouddeployDeliveryPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline">putSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSerialPipeline">resetSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSerialPipeline` <a name="putSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline"></a>

```typescript
public putSerialPipeline(value: ClouddeployDeliveryPipelineSerialPipeline): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts"></a>

```typescript
public putTimeouts(value: ClouddeployDeliveryPipelineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSerialPipeline` <a name="resetSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSerialPipeline"></a>

```typescript
public resetSerialPipeline(): void
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSuspended"></a>

```typescript
public resetSuspended(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList">ClouddeployDeliveryPipelineConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipeline">serialPipeline</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference">ClouddeployDeliveryPipelineSerialPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference">ClouddeployDeliveryPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipelineInput">serialPipelineInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspendedInput">suspendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.condition"></a>

```typescript
public readonly condition: ClouddeployDeliveryPipelineConditionList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList">ClouddeployDeliveryPipelineConditionList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `serialPipeline`<sup>Required</sup> <a name="serialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipeline"></a>

```typescript
public readonly serialPipeline: ClouddeployDeliveryPipelineSerialPipelineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference">ClouddeployDeliveryPipelineSerialPipelineOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployDeliveryPipelineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference">ClouddeployDeliveryPipelineTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serialPipelineInput`<sup>Optional</sup> <a name="serialPipelineInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipelineInput"></a>

```typescript
public readonly serialPipelineInput: ClouddeployDeliveryPipelineSerialPipeline;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspendedInput"></a>

```typescript
public readonly suspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ClouddeployDeliveryPipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployDeliveryPipelineCondition <a name="ClouddeployDeliveryPipelineCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineCondition: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition = { ... }
```


### ClouddeployDeliveryPipelineConditionPipelineReadyCondition <a name="ClouddeployDeliveryPipelineConditionPipelineReadyCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineConditionPipelineReadyCondition: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition = { ... }
```


### ClouddeployDeliveryPipelineConditionTargetsPresentCondition <a name="ClouddeployDeliveryPipelineConditionTargetsPresentCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineConditionTargetsPresentCondition: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition = { ... }
```


### ClouddeployDeliveryPipelineConditionTargetsTypeCondition <a name="ClouddeployDeliveryPipelineConditionTargetsTypeCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineConditionTargetsTypeCondition: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition = { ... }
```


### ClouddeployDeliveryPipelineConfig <a name="ClouddeployDeliveryPipelineConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineConfig: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.name">name</a></code> | <code>string</code> | Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User annotations. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.description">description</a></code> | <code>string</code> | Description of the `DeliveryPipeline`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.serialPipeline">serialPipeline</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | serial_pipeline block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | When suspended, no new releases or rollouts can be created, but in-progress ones will complete. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#location ClouddeployDeliveryPipeline#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#name ClouddeployDeliveryPipeline#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User annotations.

These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#annotations ClouddeployDeliveryPipeline#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the `DeliveryPipeline`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#description ClouddeployDeliveryPipeline#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#project ClouddeployDeliveryPipeline#project}

---

##### `serialPipeline`<sup>Optional</sup> <a name="serialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.serialPipeline"></a>

```typescript
public readonly serialPipeline: ClouddeployDeliveryPipelineSerialPipeline;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

serial_pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#serial_pipeline ClouddeployDeliveryPipeline#serial_pipeline}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When suspended, no new releases or rollouts can be created, but in-progress ones will complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#suspended ClouddeployDeliveryPipeline#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployDeliveryPipelineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#timeouts ClouddeployDeliveryPipeline#timeouts}

---

### ClouddeployDeliveryPipelineSerialPipeline <a name="ClouddeployDeliveryPipelineSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineSerialPipeline: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.property.stages">stages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>[]</code> | stages block. |

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.property.stages"></a>

```typescript
public readonly stages: IResolvable | ClouddeployDeliveryPipelineSerialPipelineStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>[]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#stages ClouddeployDeliveryPipeline#stages}

---

### ClouddeployDeliveryPipelineSerialPipelineStages <a name="ClouddeployDeliveryPipelineSerialPipelineStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineSerialPipelineStages: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.profiles">profiles</a></code> | <code>string[]</code> | Skaffold profiles to use when rendering the manifest for this stage's `Target`. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.targetId">targetId</a></code> | <code>string</code> | The target_id to which this stage points. |

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

Skaffold profiles to use when rendering the manifest for this stage's `Target`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.strategy"></a>

```typescript
public readonly strategy: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#strategy ClouddeployDeliveryPipeline#strategy}

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target_id to which this stage points.

This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#target_id ClouddeployDeliveryPipeline#target_id}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategy <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineSerialPipelineStagesStrategy: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.standard">standard</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | standard block. |

---

##### `standard`<sup>Optional</sup> <a name="standard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.standard"></a>

```typescript
public readonly standard: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

standard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#standard ClouddeployDeliveryPipeline#standard}

---

### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to verify a deployment. |

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to verify a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}

---

### ClouddeployDeliveryPipelineTimeouts <a name="ClouddeployDeliveryPipelineTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineTimeouts: clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployDeliveryPipelineConditionList <a name="ClouddeployDeliveryPipelineConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get"></a>

```typescript
public get(index: number): ClouddeployDeliveryPipelineConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClouddeployDeliveryPipelineConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition">pipelineReadyCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList">ClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition">targetsPresentCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList">ClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsTypeCondition">targetsTypeCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList">ClouddeployDeliveryPipelineConditionTargetsTypeConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition">ClouddeployDeliveryPipelineCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineReadyCondition`<sup>Required</sup> <a name="pipelineReadyCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition"></a>

```typescript
public readonly pipelineReadyCondition: ClouddeployDeliveryPipelineConditionPipelineReadyConditionList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList">ClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a>

---

##### `targetsPresentCondition`<sup>Required</sup> <a name="targetsPresentCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition"></a>

```typescript
public readonly targetsPresentCondition: ClouddeployDeliveryPipelineConditionTargetsPresentConditionList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList">ClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a>

---

##### `targetsTypeCondition`<sup>Required</sup> <a name="targetsTypeCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsTypeCondition"></a>

```typescript
public readonly targetsTypeCondition: ClouddeployDeliveryPipelineConditionTargetsTypeConditionList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList">ClouddeployDeliveryPipelineConditionTargetsTypeConditionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition">ClouddeployDeliveryPipelineCondition</a>

---


### ClouddeployDeliveryPipelineConditionPipelineReadyConditionList <a name="ClouddeployDeliveryPipelineConditionPipelineReadyConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get"></a>

```typescript
public get(index: number): ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition">ClouddeployDeliveryPipelineConditionPipelineReadyCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status"></a>

```typescript
public readonly status: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineConditionPipelineReadyCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition">ClouddeployDeliveryPipelineConditionPipelineReadyCondition</a>

---


### ClouddeployDeliveryPipelineConditionTargetsPresentConditionList <a name="ClouddeployDeliveryPipelineConditionTargetsPresentConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get"></a>

```typescript
public get(index: number): ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets">missingTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition">ClouddeployDeliveryPipelineConditionTargetsPresentCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `missingTargets`<sup>Required</sup> <a name="missingTargets" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets"></a>

```typescript
public readonly missingTargets: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status"></a>

```typescript
public readonly status: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineConditionTargetsPresentCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition">ClouddeployDeliveryPipelineConditionTargetsPresentCondition</a>

---


### ClouddeployDeliveryPipelineConditionTargetsTypeConditionList <a name="ClouddeployDeliveryPipelineConditionTargetsTypeConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get"></a>

```typescript
public get(index: number): ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.errorDetails">errorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition">ClouddeployDeliveryPipelineConditionTargetsTypeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.errorDetails"></a>

```typescript
public readonly errorDetails: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.status"></a>

```typescript
public readonly status: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineConditionTargetsTypeCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsTypeCondition">ClouddeployDeliveryPipelineConditionTargetsTypeCondition</a>

---


### ClouddeployDeliveryPipelineSerialPipelineOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages">resetStages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStages` <a name="putStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages"></a>

```typescript
public putStages(value: IResolvable | ClouddeployDeliveryPipelineSerialPipelineStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>[]

---

##### `resetStages` <a name="resetStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages"></a>

```typescript
public resetStages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages">stages</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList">ClouddeployDeliveryPipelineSerialPipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput">stagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages"></a>

```typescript
public readonly stages: ClouddeployDeliveryPipelineSerialPipelineStagesList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList">ClouddeployDeliveryPipelineSerialPipelineStagesList</a>

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | ClouddeployDeliveryPipelineSerialPipelineStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineSerialPipeline;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesList <a name="ClouddeployDeliveryPipelineSerialPipelineStagesList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get"></a>

```typescript
public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployDeliveryPipelineSerialPipelineStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>[]

---


### ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles">resetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy"></a>

```typescript
public putStrategy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---

##### `resetProfiles` <a name="resetProfiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles"></a>

```typescript
public resetProfiles(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

##### `resetTargetId` <a name="resetTargetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId"></a>

```typescript
public resetTargetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput">profilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategyInput">strategyInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategy"></a>

```typescript
public readonly strategy: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference</a>

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput"></a>

```typescript
public readonly profilesInput: string[];
```

- *Type:* string[]

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployDeliveryPipelineSerialPipelineStages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages">ClouddeployDeliveryPipelineSerialPipelineStages</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard">putStandard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetStandard">resetStandard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandard` <a name="putStandard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard"></a>

```typescript
public putStandard(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---

##### `resetStandard` <a name="resetStandard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetStandard"></a>

```typescript
public resetStandard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standardInput">standardInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standard"></a>

```typescript
public readonly standard: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference</a>

---

##### `standardInput`<sup>Optional</sup> <a name="standardInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standardInput"></a>

```typescript
public readonly standardInput: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategy">ClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetVerify">resetVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetVerify"></a>

```typescript
public resetVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verifyInput">verifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---


### ClouddeployDeliveryPipelineTimeoutsOutputReference <a name="ClouddeployDeliveryPipelineTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipeline } from '@cdktf/provider-google'

new clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployDeliveryPipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

---



