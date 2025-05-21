# `pubsubTopic` Submodule <a name="`pubsubTopic` Submodule" id="@cdktf/provider-google.pubsubTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubTopic <a name="PubsubTopic" id="@cdktf/provider-google.pubsubTopic.PubsubTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic google_pubsub_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopic(scope: Construct, id: string, config: PubsubTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig">PubsubTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig">PubsubTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings">putIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy">putMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings">putSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings">resetIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy">resetMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings">resetSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngestionDataSourceSettings` <a name="putIngestionDataSourceSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings"></a>

```typescript
public putIngestionDataSourceSettings(value: PubsubTopicIngestionDataSourceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---

##### `putMessageStoragePolicy` <a name="putMessageStoragePolicy" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy"></a>

```typescript
public putMessageStoragePolicy(value: PubsubTopicMessageStoragePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---

##### `putSchemaSettings` <a name="putSchemaSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings"></a>

```typescript
public putSchemaSettings(value: PubsubTopicSchemaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: PubsubTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngestionDataSourceSettings` <a name="resetIngestionDataSourceSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings"></a>

```typescript
public resetIngestionDataSourceSettings(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration"></a>

```typescript
public resetMessageRetentionDuration(): void
```

##### `resetMessageStoragePolicy` <a name="resetMessageStoragePolicy" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy"></a>

```typescript
public resetMessageStoragePolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSchemaSettings` <a name="resetSchemaSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings"></a>

```typescript
public resetSchemaSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PubsubTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isConstruct"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

pubsubTopic.PubsubTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformElement"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

pubsubTopic.PubsubTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformResource"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

pubsubTopic.PubsubTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

pubsubTopic.PubsubTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PubsubTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PubsubTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PubsubTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PubsubTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput">ingestionDataSourceSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput">messageStoragePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput">schemaSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ingestionDataSourceSettings`<sup>Required</sup> <a name="ingestionDataSourceSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings"></a>

```typescript
public readonly ingestionDataSourceSettings: PubsubTopicIngestionDataSourceSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a>

---

##### `messageStoragePolicy`<sup>Required</sup> <a name="messageStoragePolicy" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy"></a>

```typescript
public readonly messageStoragePolicy: PubsubTopicMessageStoragePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a>

---

##### `schemaSettings`<sup>Required</sup> <a name="schemaSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings"></a>

```typescript
public readonly schemaSettings: PubsubTopicSchemaSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeouts"></a>

```typescript
public readonly timeouts: PubsubTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestionDataSourceSettingsInput`<sup>Optional</sup> <a name="ingestionDataSourceSettingsInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput"></a>

```typescript
public readonly ingestionDataSourceSettingsInput: PubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput"></a>

```typescript
public readonly messageRetentionDurationInput: string;
```

- *Type:* string

---

##### `messageStoragePolicyInput`<sup>Optional</sup> <a name="messageStoragePolicyInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput"></a>

```typescript
public readonly messageStoragePolicyInput: PubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `schemaSettingsInput`<sup>Optional</sup> <a name="schemaSettingsInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput"></a>

```typescript
public readonly schemaSettingsInput: PubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PubsubTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubTopicConfig <a name="PubsubTopicConfig" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicConfig: pubsubTopic.PubsubTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.name">name</a></code> | <code>string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#id PubsubTopic#id}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | ingestion_data_source_settings block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this Topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | Indicates the minimum duration to retain a message after it is published to the topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | message_storage_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#project PubsubTopic#project}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | schema_settings block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#name PubsubTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#id PubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionDataSourceSettings`<sup>Optional</sup> <a name="ingestionDataSourceSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings"></a>

```typescript
public readonly ingestionDataSourceSettings: PubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

ingestion_data_source_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#ingestion_data_source_settings PubsubTopic#ingestion_data_source_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#kms_key_name PubsubTopic#kms_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this Topic.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#labels PubsubTopic#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

Indicates the minimum duration to retain a message after it is published to the topic.

If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#message_retention_duration PubsubTopic#message_retention_duration}

---

##### `messageStoragePolicy`<sup>Optional</sup> <a name="messageStoragePolicy" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy"></a>

```typescript
public readonly messageStoragePolicy: PubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

message_storage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#message_storage_policy PubsubTopic#message_storage_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#project PubsubTopic#project}.

---

##### `schemaSettings`<sup>Optional</sup> <a name="schemaSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings"></a>

```typescript
public readonly schemaSettings: PubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

schema_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#schema_settings PubsubTopic#schema_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PubsubTopicTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#timeouts PubsubTopic#timeouts}

---

### PubsubTopicIngestionDataSourceSettings <a name="PubsubTopicIngestionDataSourceSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettings: pubsubTopic.PubsubTopicIngestionDataSourceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | aws_kinesis block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk">awsMsk</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | aws_msk block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs">azureEventHubs</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | azure_event_hubs block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | cloud_storage block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud">confluentCloud</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | confluent_cloud block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | platform_logs_settings block. |

---

##### `awsKinesis`<sup>Optional</sup> <a name="awsKinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis"></a>

```typescript
public readonly awsKinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

aws_kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#aws_kinesis PubsubTopic#aws_kinesis}

---

##### `awsMsk`<sup>Optional</sup> <a name="awsMsk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk"></a>

```typescript
public readonly awsMsk: PubsubTopicIngestionDataSourceSettingsAwsMsk;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

aws_msk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#aws_msk PubsubTopic#aws_msk}

---

##### `azureEventHubs`<sup>Optional</sup> <a name="azureEventHubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs"></a>

```typescript
public readonly azureEventHubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubs;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

azure_event_hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#azure_event_hubs PubsubTopic#azure_event_hubs}

---

##### `cloudStorage`<sup>Optional</sup> <a name="cloudStorage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage"></a>

```typescript
public readonly cloudStorage: PubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#cloud_storage PubsubTopic#cloud_storage}

---

##### `confluentCloud`<sup>Optional</sup> <a name="confluentCloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud"></a>

```typescript
public readonly confluentCloud: PubsubTopicIngestionDataSourceSettingsConfluentCloud;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

confluent_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#confluent_cloud PubsubTopic#confluent_cloud}

---

##### `platformLogsSettings`<sup>Optional</sup> <a name="platformLogsSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings"></a>

```typescript
public readonly platformLogsSettings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

platform_logs_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#platform_logs_settings PubsubTopic#platform_logs_settings}

---

### PubsubTopicIngestionDataSourceSettingsAwsKinesis <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsAwsKinesis: pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | AWS role ARN to be used for Federated Identity authentication with Kinesis. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn">consumerArn</a></code> | <code>string</code> | The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn">streamArn</a></code> | <code>string</code> | The Kinesis stream ARN to ingest data from. |

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

AWS role ARN to be used for Federated Identity authentication with Kinesis.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode.

The consumer must be already
created and ready to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#consumer_arn PubsubTopic#consumer_arn}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

The Kinesis stream ARN to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#stream_arn PubsubTopic#stream_arn}

---

### PubsubTopicIngestionDataSourceSettingsAwsMsk <a name="PubsubTopicIngestionDataSourceSettingsAwsMsk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsAwsMsk: pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | AWS role ARN to be used for Federated Identity authentication with MSK. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn">clusterArn</a></code> | <code>string</code> | ARN that uniquely identifies the MSK cluster. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic">topic</a></code> | <code>string</code> | The name of the MSK topic that Pub/Sub will import from. |

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

AWS role ARN to be used for Federated Identity authentication with MSK.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

ARN that uniquely identifies the MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#cluster_arn PubsubTopic#cluster_arn}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The name of the MSK topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

### PubsubTopicIngestionDataSourceSettingsAzureEventHubs <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsAzureEventHubs: pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId">clientId</a></code> | <code>string</code> | The Azure event hub client ID to use for ingestion. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub">eventHub</a></code> | <code>string</code> | The Azure event hub to ingest data from. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace">namespace</a></code> | <code>string</code> | The Azure event hub namespace to ingest data from. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | The name of the resource group within an Azure subscription. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The Azure event hub subscription ID to use for ingestion. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId">tenantId</a></code> | <code>string</code> | The Azure event hub tenant ID to use for ingestion. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The Azure event hub client ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#client_id PubsubTopic#client_id}

---

##### `eventHub`<sup>Optional</sup> <a name="eventHub" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub"></a>

```typescript
public readonly eventHub: string;
```

- *Type:* string

The Azure event hub to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#event_hub PubsubTopic#event_hub}

---

##### `gcpServiceAccount`<sup>Optional</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Azure event hub namespace to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#namespace PubsubTopic#namespace}

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

The name of the resource group within an Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#resource_group PubsubTopic#resource_group}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The Azure event hub subscription ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#subscription_id PubsubTopic#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Azure event hub tenant ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#tenant_id PubsubTopic#tenant_id}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorage <a name="PubsubTopicIngestionDataSourceSettingsCloudStorage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStorage: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket">bucket</a></code> | <code>string</code> | Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | avro_format block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob">matchGlob</a></code> | <code>string</code> | Glob pattern used to match objects that will be ingested. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>string</code> | The timestamp set in RFC3339 text format. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | pubsub_avro_format block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat">textFormat</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | text_format block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#bucket PubsubTopic#bucket}

---

##### `avroFormat`<sup>Optional</sup> <a name="avroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat"></a>

```typescript
public readonly avroFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#avro_format PubsubTopic#avro_format}

---

##### `matchGlob`<sup>Optional</sup> <a name="matchGlob" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob"></a>

```typescript
public readonly matchGlob: string;
```

- *Type:* string

Glob pattern used to match objects that will be ingested.

If unset, all
objects will be ingested. See the supported patterns:
https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#match_glob PubsubTopic#match_glob}

---

##### `minimumObjectCreateTime`<sup>Optional</sup> <a name="minimumObjectCreateTime" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime"></a>

```typescript
public readonly minimumObjectCreateTime: string;
```

- *Type:* string

The timestamp set in RFC3339 text format.

If set, only objects with a
larger or equal timestamp will be ingested. Unset by default, meaning
all objects will be ingested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#minimum_object_create_time PubsubTopic#minimum_object_create_time}

---

##### `pubsubAvroFormat`<sup>Optional</sup> <a name="pubsubAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat"></a>

```typescript
public readonly pubsubAvroFormat: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

pubsub_avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#pubsub_avro_format PubsubTopic#pubsub_avro_format}

---

##### `textFormat`<sup>Optional</sup> <a name="textFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat"></a>

```typescript
public readonly textFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

text_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#text_format PubsubTopic#text_format}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat = { ... }
```


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat = { ... }
```


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter">delimiter</a></code> | <code>string</code> | The delimiter to use when using the 'text' format. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

The delimiter to use when using the 'text' format.

Each line of text as
specified by the delimiter will be set to the 'data' field of a Pub/Sub
message. When unset, '\n' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#delimiter PubsubTopic#delimiter}

---

### PubsubTopicIngestionDataSourceSettingsConfluentCloud <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsConfluentCloud: pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer">bootstrapServer</a></code> | <code>string</code> | The Confluent Cloud bootstrap server. The format is url:port. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | Identity pool ID to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic">topic</a></code> | <code>string</code> | Name of the Confluent Cloud topic that Pub/Sub will import from. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId">clusterId</a></code> | <code>string</code> | The Confluent Cloud cluster ID. |

---

##### `bootstrapServer`<sup>Required</sup> <a name="bootstrapServer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer"></a>

```typescript
public readonly bootstrapServer: string;
```

- *Type:* string

The Confluent Cloud bootstrap server. The format is url:port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#bootstrap_server PubsubTopic#bootstrap_server}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

Identity pool ID to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#identity_pool_id PubsubTopic#identity_pool_id}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Name of the Confluent Cloud topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The Confluent Cloud cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#cluster_id PubsubTopic#cluster_id}

---

### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicIngestionDataSourceSettingsPlatformLogsSettings: pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity">severity</a></code> | <code>string</code> | The minimum severity level of Platform Logs that will be written. |

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The minimum severity level of Platform Logs that will be written.

If unspecified,
no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#severity PubsubTopic#severity}

---

### PubsubTopicMessageStoragePolicy <a name="PubsubTopicMessageStoragePolicy" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicMessageStoragePolicy: pubsubTopic.PubsubTopicMessageStoragePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>string[]</code> | A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit">enforceInTransit</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages. |

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions"></a>

```typescript
public readonly allowedPersistenceRegions: string[];
```

- *Type:* string[]

A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage.

Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#allowed_persistence_regions PubsubTopic#allowed_persistence_regions}

---

##### `enforceInTransit`<sup>Optional</sup> <a name="enforceInTransit" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit"></a>

```typescript
public readonly enforceInTransit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages.

That is, Pub/Sub will fail topics.publish
operations on this topic and subscribe operations on any subscription
attached to this topic in any region that is not in 'allowedPersistenceRegions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#enforce_in_transit PubsubTopic#enforce_in_transit}

---

### PubsubTopicSchemaSettings <a name="PubsubTopicSchemaSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicSchemaSettings: pubsubTopic.PubsubTopicSchemaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema">schema</a></code> | <code>string</code> | The name of the schema that messages published should be validated against. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding">encoding</a></code> | <code>string</code> | The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The name of the schema that messages published should be validated against.

Format is projects/{project}/schemas/{schema}.
The value of this field will be _deleted-schema_
if the schema has been deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#schema PubsubTopic#schema}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#encoding PubsubTopic#encoding}

---

### PubsubTopicTimeouts <a name="PubsubTopicTimeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

const pubsubTopicTimeouts: pubsubTopic.PubsubTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#create PubsubTopic#create}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#update PubsubTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#create PubsubTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/pubsub_topic#update PubsubTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput">consumerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn">consumerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput"></a>

```typescript
public readonly awsRoleArnInput: string;
```

- *Type:* string

---

##### `consumerArnInput`<sup>Optional</sup> <a name="consumerArnInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput"></a>

```typescript
public readonly consumerArnInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---


### PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput"></a>

```typescript
public readonly awsRoleArnInput: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsAwsMsk;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---


### PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub">resetEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount">resetGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetEventHub` <a name="resetEventHub" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub"></a>

```typescript
public resetEventHub(): void
```

##### `resetGcpServiceAccount` <a name="resetGcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount"></a>

```typescript
public resetGcpServiceAccount(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput">eventHubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub">eventHub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `eventHubInput`<sup>Optional</sup> <a name="eventHubInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput"></a>

```typescript
public readonly eventHubInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `eventHub`<sup>Required</sup> <a name="eventHub" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub"></a>

```typescript
public readonly eventHub: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsAzureEventHubs;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat">putAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat">putPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat">putTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat">resetAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob">resetMatchGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime">resetMinimumObjectCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat">resetPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat">resetTextFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroFormat` <a name="putAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat"></a>

```typescript
public putAvroFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `putPubsubAvroFormat` <a name="putPubsubAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat"></a>

```typescript
public putPubsubAvroFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `putTextFormat` <a name="putTextFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat"></a>

```typescript
public putTextFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `resetAvroFormat` <a name="resetAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat"></a>

```typescript
public resetAvroFormat(): void
```

##### `resetMatchGlob` <a name="resetMatchGlob" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob"></a>

```typescript
public resetMatchGlob(): void
```

##### `resetMinimumObjectCreateTime` <a name="resetMinimumObjectCreateTime" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime"></a>

```typescript
public resetMinimumObjectCreateTime(): void
```

##### `resetPubsubAvroFormat` <a name="resetPubsubAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat"></a>

```typescript
public resetPubsubAvroFormat(): void
```

##### `resetTextFormat` <a name="resetTextFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat"></a>

```typescript
public resetTextFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat">textFormat</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput">avroFormatInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput">matchGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput">minimumObjectCreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput">pubsubAvroFormatInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput">textFormatInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob">matchGlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avroFormat`<sup>Required</sup> <a name="avroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat"></a>

```typescript
public readonly avroFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a>

---

##### `pubsubAvroFormat`<sup>Required</sup> <a name="pubsubAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat"></a>

```typescript
public readonly pubsubAvroFormat: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a>

---

##### `textFormat`<sup>Required</sup> <a name="textFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat"></a>

```typescript
public readonly textFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a>

---

##### `avroFormatInput`<sup>Optional</sup> <a name="avroFormatInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput"></a>

```typescript
public readonly avroFormatInput: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `matchGlobInput`<sup>Optional</sup> <a name="matchGlobInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput"></a>

```typescript
public readonly matchGlobInput: string;
```

- *Type:* string

---

##### `minimumObjectCreateTimeInput`<sup>Optional</sup> <a name="minimumObjectCreateTimeInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput"></a>

```typescript
public readonly minimumObjectCreateTimeInput: string;
```

- *Type:* string

---

##### `pubsubAvroFormatInput`<sup>Optional</sup> <a name="pubsubAvroFormatInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput"></a>

```typescript
public readonly pubsubAvroFormatInput: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `textFormatInput`<sup>Optional</sup> <a name="textFormatInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput"></a>

```typescript
public readonly textFormatInput: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `matchGlob`<sup>Required</sup> <a name="matchGlob" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob"></a>

```typescript
public readonly matchGlob: string;
```

- *Type:* string

---

##### `minimumObjectCreateTime`<sup>Required</sup> <a name="minimumObjectCreateTime" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime"></a>

```typescript
public readonly minimumObjectCreateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId"></a>

```typescript
public resetClusterId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput">bootstrapServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer">bootstrapServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootstrapServerInput`<sup>Optional</sup> <a name="bootstrapServerInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput"></a>

```typescript
public readonly bootstrapServerInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput"></a>

```typescript
public readonly identityPoolIdInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `bootstrapServer`<sup>Required</sup> <a name="bootstrapServer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer"></a>

```typescript
public readonly bootstrapServer: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsConfluentCloud;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---


### PubsubTopicIngestionDataSourceSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis">putAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk">putAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs">putAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage">putCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud">putConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings">putPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis">resetAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk">resetAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs">resetAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage">resetCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud">resetConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings">resetPlatformLogsSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsKinesis` <a name="putAwsKinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis"></a>

```typescript
public putAwsKinesis(value: PubsubTopicIngestionDataSourceSettingsAwsKinesis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `putAwsMsk` <a name="putAwsMsk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk"></a>

```typescript
public putAwsMsk(value: PubsubTopicIngestionDataSourceSettingsAwsMsk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---

##### `putAzureEventHubs` <a name="putAzureEventHubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs"></a>

```typescript
public putAzureEventHubs(value: PubsubTopicIngestionDataSourceSettingsAzureEventHubs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---

##### `putCloudStorage` <a name="putCloudStorage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage"></a>

```typescript
public putCloudStorage(value: PubsubTopicIngestionDataSourceSettingsCloudStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `putConfluentCloud` <a name="putConfluentCloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud"></a>

```typescript
public putConfluentCloud(value: PubsubTopicIngestionDataSourceSettingsConfluentCloud): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---

##### `putPlatformLogsSettings` <a name="putPlatformLogsSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings"></a>

```typescript
public putPlatformLogsSettings(value: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `resetAwsKinesis` <a name="resetAwsKinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis"></a>

```typescript
public resetAwsKinesis(): void
```

##### `resetAwsMsk` <a name="resetAwsMsk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk"></a>

```typescript
public resetAwsMsk(): void
```

##### `resetAzureEventHubs` <a name="resetAzureEventHubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs"></a>

```typescript
public resetAzureEventHubs(): void
```

##### `resetCloudStorage` <a name="resetCloudStorage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage"></a>

```typescript
public resetCloudStorage(): void
```

##### `resetConfluentCloud` <a name="resetConfluentCloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud"></a>

```typescript
public resetConfluentCloud(): void
```

##### `resetPlatformLogsSettings` <a name="resetPlatformLogsSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings"></a>

```typescript
public resetPlatformLogsSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk">awsMsk</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs">azureEventHubs</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud">confluentCloud</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput">awsKinesisInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput">awsMskInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput">azureEventHubsInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput">cloudStorageInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput">confluentCloudInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput">platformLogsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsKinesis`<sup>Required</sup> <a name="awsKinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis"></a>

```typescript
public readonly awsKinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a>

---

##### `awsMsk`<sup>Required</sup> <a name="awsMsk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk"></a>

```typescript
public readonly awsMsk: PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a>

---

##### `azureEventHubs`<sup>Required</sup> <a name="azureEventHubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs"></a>

```typescript
public readonly azureEventHubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a>

---

##### `cloudStorage`<sup>Required</sup> <a name="cloudStorage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage"></a>

```typescript
public readonly cloudStorage: PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a>

---

##### `confluentCloud`<sup>Required</sup> <a name="confluentCloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud"></a>

```typescript
public readonly confluentCloud: PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a>

---

##### `platformLogsSettings`<sup>Required</sup> <a name="platformLogsSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings"></a>

```typescript
public readonly platformLogsSettings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a>

---

##### `awsKinesisInput`<sup>Optional</sup> <a name="awsKinesisInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput"></a>

```typescript
public readonly awsKinesisInput: PubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `awsMskInput`<sup>Optional</sup> <a name="awsMskInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput"></a>

```typescript
public readonly awsMskInput: PubsubTopicIngestionDataSourceSettingsAwsMsk;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---

##### `azureEventHubsInput`<sup>Optional</sup> <a name="azureEventHubsInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput"></a>

```typescript
public readonly azureEventHubsInput: PubsubTopicIngestionDataSourceSettingsAzureEventHubs;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---

##### `cloudStorageInput`<sup>Optional</sup> <a name="cloudStorageInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput"></a>

```typescript
public readonly cloudStorageInput: PubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `confluentCloudInput`<sup>Optional</sup> <a name="confluentCloudInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput"></a>

```typescript
public readonly confluentCloudInput: PubsubTopicIngestionDataSourceSettingsConfluentCloud;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---

##### `platformLogsSettingsInput`<sup>Optional</sup> <a name="platformLogsSettingsInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput"></a>

```typescript
public readonly platformLogsSettingsInput: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---


### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---


### PubsubTopicMessageStoragePolicyOutputReference <a name="PubsubTopicMessageStoragePolicyOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit">resetEnforceInTransit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforceInTransit` <a name="resetEnforceInTransit" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit"></a>

```typescript
public resetEnforceInTransit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput">allowedPersistenceRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput">enforceInTransitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit">enforceInTransit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPersistenceRegionsInput`<sup>Optional</sup> <a name="allowedPersistenceRegionsInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput"></a>

```typescript
public readonly allowedPersistenceRegionsInput: string[];
```

- *Type:* string[]

---

##### `enforceInTransitInput`<sup>Optional</sup> <a name="enforceInTransitInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput"></a>

```typescript
public readonly enforceInTransitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions"></a>

```typescript
public readonly allowedPersistenceRegions: string[];
```

- *Type:* string[]

---

##### `enforceInTransit`<sup>Required</sup> <a name="enforceInTransit" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit"></a>

```typescript
public readonly enforceInTransit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---


### PubsubTopicSchemaSettingsOutputReference <a name="PubsubTopicSchemaSettingsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicSchemaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---


### PubsubTopicTimeoutsOutputReference <a name="PubsubTopicTimeoutsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktf/provider-google'

new pubsubTopic.PubsubTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PubsubTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---



