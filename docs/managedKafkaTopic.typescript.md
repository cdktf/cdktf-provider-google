# `managedKafkaTopic` Submodule <a name="`managedKafkaTopic` Submodule" id="@cdktf/provider-google.managedKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaTopic <a name="ManagedKafkaTopic" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic google_managed_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

new managedKafkaTopic.ManagedKafkaTopic(scope: Construct, id: string, config: ManagedKafkaTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig">ManagedKafkaTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig">ManagedKafkaTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetPartitionCount">resetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedKafkaTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetConfigs"></a>

```typescript
public resetConfigs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartitionCount` <a name="resetPartitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetPartitionCount"></a>

```typescript
public resetPartitionCount(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

managedKafkaTopic.ManagedKafkaTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

managedKafkaTopic.ManagedKafkaTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

managedKafkaTopic.ManagedKafkaTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKafkaTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference">ManagedKafkaTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configsInput">configsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCountInput">partitionCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configs">configs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCount">partitionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference">ManagedKafkaTopicTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configsInput"></a>

```typescript
public readonly configsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `partitionCountInput`<sup>Optional</sup> <a name="partitionCountInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCountInput"></a>

```typescript
public readonly partitionCountInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedKafkaTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configs"></a>

```typescript
public readonly configs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `partitionCount`<sup>Required</sup> <a name="partitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCount"></a>

```typescript
public readonly partitionCount: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaTopicConfig <a name="ManagedKafkaTopicConfig" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.Initializer"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

const managedKafkaTopicConfig: managedKafkaTopic.ManagedKafkaTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.cluster">cluster</a></code> | <code>string</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.location">location</a></code> | <code>string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | The number of replicas of each partition. A replication factor of 3 is recommended for high availability. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.topicId">topicId</a></code> | <code>string</code> | The ID to use for the topic, which will become the final component of the topic's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.configs">configs</a></code> | <code>{[ key: string ]: string}</code> | Configuration for the topic that are overridden from the cluster defaults. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.partitionCount">partitionCount</a></code> | <code>number</code> | The number of partitions in a topic. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#cluster ManagedKafkaTopic#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#location ManagedKafkaTopic#location}

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

The number of replicas of each partition. A replication factor of 3 is recommended for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#replication_factor ManagedKafkaTopic#replication_factor}

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

The ID to use for the topic, which will become the final component of the topic's name.

This value is structured like: 'my-topic-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#topic_id ManagedKafkaTopic#topic_id}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.configs"></a>

```typescript
public readonly configs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration for the topic that are overridden from the cluster defaults.

The key of the map is a Kafka topic property name, for example: 'cleanup.policy=compact', 'compression.type=producer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#configs ManagedKafkaTopic#configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.partitionCount"></a>

```typescript
public readonly partitionCount: number;
```

- *Type:* number

The number of partitions in a topic.

You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#partition_count ManagedKafkaTopic#partition_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaTopicTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#timeouts ManagedKafkaTopic#timeouts}

---

### ManagedKafkaTopicTimeouts <a name="ManagedKafkaTopicTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.Initializer"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

const managedKafkaTopicTimeouts: managedKafkaTopic.ManagedKafkaTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#create ManagedKafkaTopic#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#delete ManagedKafkaTopic#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#update ManagedKafkaTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#create ManagedKafkaTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#delete ManagedKafkaTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_topic#update ManagedKafkaTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaTopicTimeoutsOutputReference <a name="ManagedKafkaTopicTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedKafkaTopic } from '@cdktf/provider-google'

new managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

---



