# `google_pubsub_lite_topic`

Refer to the Terraform Registory for docs: [`google_pubsub_lite_topic`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic).

# `pubsubLiteTopic` Submodule <a name="`pubsubLiteTopic` Submodule" id="@cdktf/provider-google.pubsubLiteTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubLiteTopic <a name="PubsubLiteTopic" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic google_pubsub_lite_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

new pubsubLiteTopic.PubsubLiteTopic(scope: Construct, id: string, config: PubsubLiteTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig">PubsubLiteTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig">PubsubLiteTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig">putPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig">putReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig">putRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetPartitionConfig">resetPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetReservationConfig">resetReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRetentionConfig">resetRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPartitionConfig` <a name="putPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig"></a>

```typescript
public putPartitionConfig(value: PubsubLiteTopicPartitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---

##### `putReservationConfig` <a name="putReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig"></a>

```typescript
public putReservationConfig(value: PubsubLiteTopicReservationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---

##### `putRetentionConfig` <a name="putRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig"></a>

```typescript
public putRetentionConfig(value: PubsubLiteTopicRetentionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: PubsubLiteTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartitionConfig` <a name="resetPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetPartitionConfig"></a>

```typescript
public resetPartitionConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservationConfig` <a name="resetReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetReservationConfig"></a>

```typescript
public resetReservationConfig(): void
```

##### `resetRetentionConfig` <a name="resetRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRetentionConfig"></a>

```typescript
public resetRetentionConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

pubsubLiteTopic.PubsubLiteTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

pubsubLiteTopic.PubsubLiteTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

pubsubLiteTopic.PubsubLiteTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfig">partitionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference">PubsubLiteTopicPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfig">reservationConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference">PubsubLiteTopicReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfig">retentionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference">PubsubLiteTopicRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference">PubsubLiteTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfigInput">partitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfigInput">reservationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfigInput">retentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `partitionConfig`<sup>Required</sup> <a name="partitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfig"></a>

```typescript
public readonly partitionConfig: PubsubLiteTopicPartitionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference">PubsubLiteTopicPartitionConfigOutputReference</a>

---

##### `reservationConfig`<sup>Required</sup> <a name="reservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfig"></a>

```typescript
public readonly reservationConfig: PubsubLiteTopicReservationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference">PubsubLiteTopicReservationConfigOutputReference</a>

---

##### `retentionConfig`<sup>Required</sup> <a name="retentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfig"></a>

```typescript
public readonly retentionConfig: PubsubLiteTopicRetentionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference">PubsubLiteTopicRetentionConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeouts"></a>

```typescript
public readonly timeouts: PubsubLiteTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference">PubsubLiteTopicTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionConfigInput`<sup>Optional</sup> <a name="partitionConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfigInput"></a>

```typescript
public readonly partitionConfigInput: PubsubLiteTopicPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservationConfigInput`<sup>Optional</sup> <a name="reservationConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfigInput"></a>

```typescript
public readonly reservationConfigInput: PubsubLiteTopicReservationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---

##### `retentionConfigInput`<sup>Optional</sup> <a name="retentionConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfigInput"></a>

```typescript
public readonly retentionConfigInput: PubsubLiteTopicRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PubsubLiteTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubLiteTopicConfig <a name="PubsubLiteTopicConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

const pubsubLiteTopicConfig: pubsubLiteTopic.PubsubLiteTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.name">name</a></code> | <code>string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#id PubsubLiteTopic#id}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.partitionConfig">partitionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | partition_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#project PubsubLiteTopic#project}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.region">region</a></code> | <code>string</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.reservationConfig">reservationConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | reservation_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.retentionConfig">retentionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | retention_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.zone">zone</a></code> | <code>string</code> | The zone of the pubsub lite topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#name PubsubLiteTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#id PubsubLiteTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionConfig`<sup>Optional</sup> <a name="partitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.partitionConfig"></a>

```typescript
public readonly partitionConfig: PubsubLiteTopicPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#partition_config PubsubLiteTopic#partition_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#project PubsubLiteTopic#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#region PubsubLiteTopic#region}

---

##### `reservationConfig`<sup>Optional</sup> <a name="reservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.reservationConfig"></a>

```typescript
public readonly reservationConfig: PubsubLiteTopicReservationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

reservation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#reservation_config PubsubLiteTopic#reservation_config}

---

##### `retentionConfig`<sup>Optional</sup> <a name="retentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.retentionConfig"></a>

```typescript
public readonly retentionConfig: PubsubLiteTopicRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#retention_config PubsubLiteTopic#retention_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PubsubLiteTopicTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#timeouts PubsubLiteTopic#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#zone PubsubLiteTopic#zone}

---

### PubsubLiteTopicPartitionConfig <a name="PubsubLiteTopicPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

const pubsubLiteTopicPartitionConfig: pubsubLiteTopic.PubsubLiteTopicPartitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.count">count</a></code> | <code>number</code> | The number of partitions in the topic. Must be at least 1. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | capacity block. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of partitions in the topic. Must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#count PubsubLiteTopic#count}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.capacity"></a>

```typescript
public readonly capacity: PubsubLiteTopicPartitionConfigCapacity;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#capacity PubsubLiteTopic#capacity}

---

### PubsubLiteTopicPartitionConfigCapacity <a name="PubsubLiteTopicPartitionConfigCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

const pubsubLiteTopicPartitionConfigCapacity: pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec">publishMibPerSec</a></code> | <code>number</code> | Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec">subscribeMibPerSec</a></code> | <code>number</code> | Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |

---

##### `publishMibPerSec`<sup>Required</sup> <a name="publishMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec"></a>

```typescript
public readonly publishMibPerSec: number;
```

- *Type:* number

Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#publish_mib_per_sec PubsubLiteTopic#publish_mib_per_sec}

---

##### `subscribeMibPerSec`<sup>Required</sup> <a name="subscribeMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec"></a>

```typescript
public readonly subscribeMibPerSec: number;
```

- *Type:* number

Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#subscribe_mib_per_sec PubsubLiteTopic#subscribe_mib_per_sec}

---

### PubsubLiteTopicReservationConfig <a name="PubsubLiteTopicReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

const pubsubLiteTopicReservationConfig: pubsubLiteTopic.PubsubLiteTopicReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.property.throughputReservation">throughputReservation</a></code> | <code>string</code> | The Reservation to use for this topic's throughput capacity. |

---

##### `throughputReservation`<sup>Optional</sup> <a name="throughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.property.throughputReservation"></a>

```typescript
public readonly throughputReservation: string;
```

- *Type:* string

The Reservation to use for this topic's throughput capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#throughput_reservation PubsubLiteTopic#throughput_reservation}

---

### PubsubLiteTopicRetentionConfig <a name="PubsubLiteTopicRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

const pubsubLiteTopicRetentionConfig: pubsubLiteTopic.PubsubLiteTopicRetentionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.perPartitionBytes">perPartitionBytes</a></code> | <code>string</code> | The provisioned storage, in bytes, per partition. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.period">period</a></code> | <code>string</code> | How long a published message is retained. |

---

##### `perPartitionBytes`<sup>Required</sup> <a name="perPartitionBytes" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.perPartitionBytes"></a>

```typescript
public readonly perPartitionBytes: string;
```

- *Type:* string

The provisioned storage, in bytes, per partition.

If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#per_partition_bytes PubsubLiteTopic#per_partition_bytes}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

How long a published message is retained.

If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#period PubsubLiteTopic#period}

---

### PubsubLiteTopicTimeouts <a name="PubsubLiteTopicTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

const pubsubLiteTopicTimeouts: pubsubLiteTopic.PubsubLiteTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#create PubsubLiteTopic#create}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#delete PubsubLiteTopic#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#update PubsubLiteTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#create PubsubLiteTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#delete PubsubLiteTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/pubsub_lite_topic#update PubsubLiteTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubLiteTopicPartitionConfigCapacityOutputReference <a name="PubsubLiteTopicPartitionConfigCapacityOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

new pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput">publishMibPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput">subscribeMibPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec">publishMibPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec">subscribeMibPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publishMibPerSecInput`<sup>Optional</sup> <a name="publishMibPerSecInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput"></a>

```typescript
public readonly publishMibPerSecInput: number;
```

- *Type:* number

---

##### `subscribeMibPerSecInput`<sup>Optional</sup> <a name="subscribeMibPerSecInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput"></a>

```typescript
public readonly subscribeMibPerSecInput: number;
```

- *Type:* number

---

##### `publishMibPerSec`<sup>Required</sup> <a name="publishMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec"></a>

```typescript
public readonly publishMibPerSec: number;
```

- *Type:* number

---

##### `subscribeMibPerSec`<sup>Required</sup> <a name="subscribeMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec"></a>

```typescript
public readonly subscribeMibPerSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubLiteTopicPartitionConfigCapacity;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---


### PubsubLiteTopicPartitionConfigOutputReference <a name="PubsubLiteTopicPartitionConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

new pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacity` <a name="putCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity"></a>

```typescript
public putCapacity(value: PubsubLiteTopicPartitionConfigCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resetCapacity"></a>

```typescript
public resetCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference">PubsubLiteTopicPartitionConfigCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacityInput">capacityInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacity"></a>

```typescript
public readonly capacity: PubsubLiteTopicPartitionConfigCapacityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference">PubsubLiteTopicPartitionConfigCapacityOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: PubsubLiteTopicPartitionConfigCapacity;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubLiteTopicPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---


### PubsubLiteTopicReservationConfigOutputReference <a name="PubsubLiteTopicReservationConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

new pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation">resetThroughputReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThroughputReservation` <a name="resetThroughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation"></a>

```typescript
public resetThroughputReservation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput">throughputReservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservation">throughputReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `throughputReservationInput`<sup>Optional</sup> <a name="throughputReservationInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput"></a>

```typescript
public readonly throughputReservationInput: string;
```

- *Type:* string

---

##### `throughputReservation`<sup>Required</sup> <a name="throughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservation"></a>

```typescript
public readonly throughputReservation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubLiteTopicReservationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---


### PubsubLiteTopicRetentionConfigOutputReference <a name="PubsubLiteTopicRetentionConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

new pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput">perPartitionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes">perPartitionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `perPartitionBytesInput`<sup>Optional</sup> <a name="perPartitionBytesInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput"></a>

```typescript
public readonly perPartitionBytesInput: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `perPartitionBytes`<sup>Required</sup> <a name="perPartitionBytes" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes"></a>

```typescript
public readonly perPartitionBytes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubLiteTopicRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---


### PubsubLiteTopicTimeoutsOutputReference <a name="PubsubLiteTopicTimeoutsOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { pubsubLiteTopic } from '@cdktf/provider-google'

new pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PubsubLiteTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

---



