# `filestoreInstance` Submodule <a name="`filestoreInstance` Submodule" id="@cdktf/provider-google.filestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FilestoreInstance <a name="FilestoreInstance" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstance(scope: Construct, id: string, config: FilestoreInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig">FilestoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig">FilestoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares">putFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putInitialReplication">putInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putPerformanceConfig">putPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionReason">resetDeletionProtectionReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetInitialReplication">resetInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetPerformanceConfig">resetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFileShares` <a name="putFileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares"></a>

```typescript
public putFileShares(value: FilestoreInstanceFileShares): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---

##### `putInitialReplication` <a name="putInitialReplication" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putInitialReplication"></a>

```typescript
public putInitialReplication(value: FilestoreInstanceInitialReplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putInitialReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | FilestoreInstanceNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

---

##### `putPerformanceConfig` <a name="putPerformanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putPerformanceConfig"></a>

```typescript
public putPerformanceConfig(value: FilestoreInstancePerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: FilestoreInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetDeletionProtectionReason` <a name="resetDeletionProtectionReason" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionReason"></a>

```typescript
public resetDeletionProtectionReason(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialReplication` <a name="resetInitialReplication" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetInitialReplication"></a>

```typescript
public resetInitialReplication(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPerformanceConfig` <a name="resetPerformanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetPerformanceConfig"></a>

```typescript
public resetPerformanceConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FilestoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

filestoreInstance.FilestoreInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

filestoreInstance.FilestoreInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

filestoreInstance.FilestoreInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

filestoreInstance.FilestoreInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FilestoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FilestoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FilestoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FilestoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.effectiveReplication">effectiveReplication</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList">FilestoreInstanceEffectiveReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileShares">fileShares</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.initialReplication">initialReplication</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference">FilestoreInstanceInitialReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference">FilestoreInstancePerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReasonInput">deletionProtectionReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput">fileSharesInput</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.initialReplicationInput">initialReplicationInput</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfigInput">performanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReason">deletionProtectionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveReplication`<sup>Required</sup> <a name="effectiveReplication" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.effectiveReplication"></a>

```typescript
public readonly effectiveReplication: FilestoreInstanceEffectiveReplicationList;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList">FilestoreInstanceEffectiveReplicationList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fileShares`<sup>Required</sup> <a name="fileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileShares"></a>

```typescript
public readonly fileShares: FilestoreInstanceFileSharesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a>

---

##### `initialReplication`<sup>Required</sup> <a name="initialReplication" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.initialReplication"></a>

```typescript
public readonly initialReplication: FilestoreInstanceInitialReplicationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference">FilestoreInstanceInitialReplicationOutputReference</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networks"></a>

```typescript
public readonly networks: FilestoreInstanceNetworksList;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a>

---

##### `performanceConfig`<sup>Required</sup> <a name="performanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: FilestoreInstancePerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference">FilestoreInstancePerformanceConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeouts"></a>

```typescript
public readonly timeouts: FilestoreInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionReasonInput`<sup>Optional</sup> <a name="deletionProtectionReasonInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReasonInput"></a>

```typescript
public readonly deletionProtectionReasonInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fileSharesInput`<sup>Optional</sup> <a name="fileSharesInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput"></a>

```typescript
public readonly fileSharesInput: FilestoreInstanceFileShares;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialReplicationInput`<sup>Optional</sup> <a name="initialReplicationInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.initialReplicationInput"></a>

```typescript
public readonly initialReplicationInput: FilestoreInstanceInitialReplication;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | FilestoreInstanceNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

---

##### `performanceConfigInput`<sup>Optional</sup> <a name="performanceConfigInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfigInput"></a>

```typescript
public readonly performanceConfigInput: FilestoreInstancePerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FilestoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionReason`<sup>Required</sup> <a name="deletionProtectionReason" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReason"></a>

```typescript
public readonly deletionProtectionReason: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FilestoreInstanceConfig <a name="FilestoreInstanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceConfig: filestoreInstance.FilestoreInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares">fileShares</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | file_shares block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name">name</a></code> | <code>string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier">tier</a></code> | <code>string</code> | The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the instance is protected against deletion. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionReason">deletionProtectionReason</a></code> | <code>string</code> | The reason for enabling deletion protection. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description">description</a></code> | <code>string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#id FilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.initialReplication">initialReplication</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a></code> | initial_replication block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location">location</a></code> | <code>string</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#project FilestoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.protocol">protocol</a></code> | <code>string</code> | Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone">zone</a></code> | <code>string</code> | The name of the Filestore zone of the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fileShares`<sup>Required</sup> <a name="fileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares"></a>

```typescript
public readonly fileShares: FilestoreInstanceFileShares;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

file_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#file_shares FilestoreInstance#file_shares}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | FilestoreInstanceNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#networks FilestoreInstance#networks}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#tier FilestoreInstance#tier}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the instance is protected against deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#deletion_protection_enabled FilestoreInstance#deletion_protection_enabled}

---

##### `deletionProtectionReason`<sup>Optional</sup> <a name="deletionProtectionReason" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionReason"></a>

```typescript
public readonly deletionProtectionReason: string;
```

- *Type:* string

The reason for enabling deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#deletion_protection_reason FilestoreInstance#deletion_protection_reason}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#description FilestoreInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#id FilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialReplication`<sup>Optional</sup> <a name="initialReplication" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.initialReplication"></a>

```typescript
public readonly initialReplication: FilestoreInstanceInitialReplication;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

initial_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#initial_replication FilestoreInstance#initial_replication}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#kms_key_name FilestoreInstance#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#labels FilestoreInstance#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#location FilestoreInstance#location}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: FilestoreInstancePerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#performance_config FilestoreInstance#performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#project FilestoreInstance#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#protocol FilestoreInstance#protocol}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys
and values have the same definition as resource manager
tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456. The field is
ignored when empty. The field is immutable and causes
resource replacement when mutated. This field is only set
at create time and modifying this field after creation
will trigger recreation. To apply tags to an existing
resource, see the 'google_tags_tag_value' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#tags FilestoreInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FilestoreInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#timeouts FilestoreInstance#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#zone FilestoreInstance#zone}

---

### FilestoreInstanceEffectiveReplication <a name="FilestoreInstanceEffectiveReplication" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceEffectiveReplication: filestoreInstance.FilestoreInstanceEffectiveReplication = { ... }
```


### FilestoreInstanceEffectiveReplicationReplicas <a name="FilestoreInstanceEffectiveReplicationReplicas" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceEffectiveReplicationReplicas: filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas = { ... }
```


### FilestoreInstanceFileShares <a name="FilestoreInstanceFileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceFileShares: filestoreInstance.FilestoreInstanceFileShares = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb">capacityGb</a></code> | <code>number</code> | File share capacity in GiB. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name">name</a></code> | <code>string</code> | The name of the fileshare (16 characters or less). |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions">nfsExportOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | nfs_export_options block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from. |

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb"></a>

```typescript
public readonly capacityGb: number;
```

- *Type:* number

File share capacity in GiB.

This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#capacity_gb FilestoreInstance#capacity_gb}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

##### `nfsExportOptions`<sup>Optional</sup> <a name="nfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions"></a>

```typescript
public readonly nfsExportOptions: IResolvable | FilestoreInstanceFileSharesNfsExportOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

nfs_export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#nfs_export_options FilestoreInstance#nfs_export_options}

---

##### `sourceBackup`<sup>Optional</sup> <a name="sourceBackup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#source_backup FilestoreInstance#source_backup}

---

### FilestoreInstanceFileSharesNfsExportOptions <a name="FilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceFileSharesNfsExportOptions: filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode">accessMode</a></code> | <code>string</code> | Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid">anonGid</a></code> | <code>number</code> | An integer representing the anonymous group id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid">anonUid</a></code> | <code>number</code> | An integer representing the anonymous user id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges">ipRanges</a></code> | <code>string[]</code> | List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode">squashMode</a></code> | <code>string</code> | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. |

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests.

The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#access_mode FilestoreInstance#access_mode}

---

##### `anonGid`<sup>Optional</sup> <a name="anonGid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid"></a>

```typescript
public readonly anonGid: number;
```

- *Type:* number

An integer representing the anonymous group id with a default value of 65534.

Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#anon_gid FilestoreInstance#anon_gid}

---

##### `anonUid`<sup>Optional</sup> <a name="anonUid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid"></a>

```typescript
public readonly anonUid: number;
```

- *Type:* number

An integer representing the anonymous user id with a default value of 65534.

Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#anon_uid FilestoreInstance#anon_uid}

---

##### `ipRanges`<sup>Optional</sup> <a name="ipRanges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges"></a>

```typescript
public readonly ipRanges: string[];
```

- *Type:* string[]

List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.

Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#ip_ranges FilestoreInstance#ip_ranges}

---

##### `squashMode`<sup>Optional</sup> <a name="squashMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access.

The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#squash_mode FilestoreInstance#squash_mode}

---

### FilestoreInstanceInitialReplication <a name="FilestoreInstanceInitialReplication" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceInitialReplication: filestoreInstance.FilestoreInstanceInitialReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.replicas">replicas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]</code> | replicas block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.role">role</a></code> | <code>string</code> | The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"]. |

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.replicas"></a>

```typescript
public readonly replicas: IResolvable | FilestoreInstanceInitialReplicationReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#replicas FilestoreInstance#replicas}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#role FilestoreInstance#role}

---

### FilestoreInstanceInitialReplicationReplicas <a name="FilestoreInstanceInitialReplicationReplicas" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceInitialReplicationReplicas: filestoreInstance.FilestoreInstanceInitialReplicationReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas.property.peerInstance">peerInstance</a></code> | <code>string</code> | The peer instance. |

---

##### `peerInstance`<sup>Required</sup> <a name="peerInstance" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas.property.peerInstance"></a>

```typescript
public readonly peerInstance: string;
```

- *Type:* string

The peer instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#peer_instance FilestoreInstance#peer_instance}

---

### FilestoreInstanceNetworks <a name="FilestoreInstanceNetworks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceNetworks: filestoreInstance.FilestoreInstanceNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes">modes</a></code> | <code>string[]</code> | IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network">network</a></code> | <code>string</code> | The name of the GCE VPC network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode">connectMode</a></code> | <code>string</code> | The network connect mode of the Filestore instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | A /29 CIDR block that identifies the range of IP addresses reserved for this instance. |

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#modes FilestoreInstance#modes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the GCE VPC network to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#network FilestoreInstance#network}

---

##### `connectMode`<sup>Optional</sup> <a name="connectMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

The network connect mode of the Filestore instance.

If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#connect_mode FilestoreInstance#connect_mode}

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

A /29 CIDR block that identifies the range of IP addresses reserved for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#reserved_ip_range FilestoreInstance#reserved_ip_range}

---

### FilestoreInstancePerformanceConfig <a name="FilestoreInstancePerformanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstancePerformanceConfig: filestoreInstance.FilestoreInstancePerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.fixedIops">fixedIops</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a></code> | fixed_iops block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.iopsPerTb">iopsPerTb</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a></code> | iops_per_tb block. |

---

##### `fixedIops`<sup>Optional</sup> <a name="fixedIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.fixedIops"></a>

```typescript
public readonly fixedIops: FilestoreInstancePerformanceConfigFixedIops;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

fixed_iops block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#fixed_iops FilestoreInstance#fixed_iops}

---

##### `iopsPerTb`<sup>Optional</sup> <a name="iopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.iopsPerTb"></a>

```typescript
public readonly iopsPerTb: FilestoreInstancePerformanceConfigIopsPerTb;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

iops_per_tb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#iops_per_tb FilestoreInstance#iops_per_tb}

---

### FilestoreInstancePerformanceConfigFixedIops <a name="FilestoreInstancePerformanceConfigFixedIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstancePerformanceConfigFixedIops: filestoreInstance.FilestoreInstancePerformanceConfigFixedIops = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops.property.maxIops">maxIops</a></code> | <code>number</code> | The number of IOPS to provision for the instance. max_iops must be in multiple of 1000. |

---

##### `maxIops`<sup>Optional</sup> <a name="maxIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops.property.maxIops"></a>

```typescript
public readonly maxIops: number;
```

- *Type:* number

The number of IOPS to provision for the instance. max_iops must be in multiple of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#max_iops FilestoreInstance#max_iops}

---

### FilestoreInstancePerformanceConfigIopsPerTb <a name="FilestoreInstancePerformanceConfigIopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstancePerformanceConfigIopsPerTb: filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb">maxIopsPerTb</a></code> | <code>number</code> | The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000. |

---

##### `maxIopsPerTb`<sup>Optional</sup> <a name="maxIopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb"></a>

```typescript
public readonly maxIopsPerTb: number;
```

- *Type:* number

The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000.

The instance max IOPS
will be changed dynamically based on the instance
capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#max_iops_per_tb FilestoreInstance#max_iops_per_tb}

---

### FilestoreInstanceTimeouts <a name="FilestoreInstanceTimeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

const filestoreInstanceTimeouts: filestoreInstance.FilestoreInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#create FilestoreInstance#create}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#update FilestoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#create FilestoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/filestore_instance#update FilestoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FilestoreInstanceEffectiveReplicationList <a name="FilestoreInstanceEffectiveReplicationList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceEffectiveReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.get"></a>

```typescript
public get(index: number): FilestoreInstanceEffectiveReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FilestoreInstanceEffectiveReplicationOutputReference <a name="FilestoreInstanceEffectiveReplicationOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList">FilestoreInstanceEffectiveReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication">FilestoreInstanceEffectiveReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.replicas"></a>

```typescript
public readonly replicas: FilestoreInstanceEffectiveReplicationReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList">FilestoreInstanceEffectiveReplicationReplicasList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FilestoreInstanceEffectiveReplication;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication">FilestoreInstanceEffectiveReplication</a>

---


### FilestoreInstanceEffectiveReplicationReplicasList <a name="FilestoreInstanceEffectiveReplicationReplicasList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.get"></a>

```typescript
public get(index: number): FilestoreInstanceEffectiveReplicationReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FilestoreInstanceEffectiveReplicationReplicasOutputReference <a name="FilestoreInstanceEffectiveReplicationReplicasOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime">lastActiveSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons">stateReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas">FilestoreInstanceEffectiveReplicationReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastActiveSyncTime`<sup>Required</sup> <a name="lastActiveSyncTime" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime"></a>

```typescript
public readonly lastActiveSyncTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReasons`<sup>Required</sup> <a name="stateReasons" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons"></a>

```typescript
public readonly stateReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FilestoreInstanceEffectiveReplicationReplicas;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas">FilestoreInstanceEffectiveReplicationReplicas</a>

---


### FilestoreInstanceFileSharesNfsExportOptionsList <a name="FilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```typescript
public get(index: number): FilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FilestoreInstanceFileSharesNfsExportOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

---


### FilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="FilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode">resetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid">resetAnonGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid">resetAnonUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges">resetIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode">resetSquashMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessMode` <a name="resetAccessMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode"></a>

```typescript
public resetAccessMode(): void
```

##### `resetAnonGid` <a name="resetAnonGid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid"></a>

```typescript
public resetAnonGid(): void
```

##### `resetAnonUid` <a name="resetAnonUid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid"></a>

```typescript
public resetAnonUid(): void
```

##### `resetIpRanges` <a name="resetIpRanges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges"></a>

```typescript
public resetIpRanges(): void
```

##### `resetSquashMode` <a name="resetSquashMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode"></a>

```typescript
public resetSquashMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput">anonGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput">anonUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput">ipRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput">squashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">anonGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">anonUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">ipRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">squashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `anonGidInput`<sup>Optional</sup> <a name="anonGidInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput"></a>

```typescript
public readonly anonGidInput: number;
```

- *Type:* number

---

##### `anonUidInput`<sup>Optional</sup> <a name="anonUidInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput"></a>

```typescript
public readonly anonUidInput: number;
```

- *Type:* number

---

##### `ipRangesInput`<sup>Optional</sup> <a name="ipRangesInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput"></a>

```typescript
public readonly ipRangesInput: string[];
```

- *Type:* string[]

---

##### `squashModeInput`<sup>Optional</sup> <a name="squashModeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput"></a>

```typescript
public readonly squashModeInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `anonGid`<sup>Required</sup> <a name="anonGid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```typescript
public readonly anonGid: number;
```

- *Type:* number

---

##### `anonUid`<sup>Required</sup> <a name="anonUid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```typescript
public readonly anonUid: number;
```

- *Type:* number

---

##### `ipRanges`<sup>Required</sup> <a name="ipRanges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```typescript
public readonly ipRanges: string[];
```

- *Type:* string[]

---

##### `squashMode`<sup>Required</sup> <a name="squashMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FilestoreInstanceFileSharesNfsExportOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>

---


### FilestoreInstanceFileSharesOutputReference <a name="FilestoreInstanceFileSharesOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceFileSharesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions">putNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions">resetNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackup">resetSourceBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfsExportOptions` <a name="putNfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions"></a>

```typescript
public putNfsExportOptions(value: IResolvable | FilestoreInstanceFileSharesNfsExportOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

---

##### `resetNfsExportOptions` <a name="resetNfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions"></a>

```typescript
public resetNfsExportOptions(): void
```

##### `resetSourceBackup` <a name="resetSourceBackup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackup"></a>

```typescript
public resetSourceBackup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">nfsExportOptions</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput">capacityGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput">nfsExportOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupInput">sourceBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb">capacityGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nfsExportOptions`<sup>Required</sup> <a name="nfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```typescript
public readonly nfsExportOptions: FilestoreInstanceFileSharesNfsExportOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `capacityGbInput`<sup>Optional</sup> <a name="capacityGbInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput"></a>

```typescript
public readonly capacityGbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsExportOptionsInput`<sup>Optional</sup> <a name="nfsExportOptionsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput"></a>

```typescript
public readonly nfsExportOptionsInput: IResolvable | FilestoreInstanceFileSharesNfsExportOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

---

##### `sourceBackupInput`<sup>Optional</sup> <a name="sourceBackupInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupInput"></a>

```typescript
public readonly sourceBackupInput: string;
```

- *Type:* string

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```typescript
public readonly capacityGb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceBackup`<sup>Required</sup> <a name="sourceBackup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FilestoreInstanceFileShares;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---


### FilestoreInstanceInitialReplicationOutputReference <a name="FilestoreInstanceInitialReplicationOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceInitialReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.putReplicas">putReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicas` <a name="putReplicas" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.putReplicas"></a>

```typescript
public putReplicas(value: IResolvable | FilestoreInstanceInitialReplicationReplicas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.putReplicas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

---

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList">FilestoreInstanceInitialReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicasInput">replicasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicas"></a>

```typescript
public readonly replicas: FilestoreInstanceInitialReplicationReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList">FilestoreInstanceInitialReplicationReplicasList</a>

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: IResolvable | FilestoreInstanceInitialReplicationReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FilestoreInstanceInitialReplication;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

---


### FilestoreInstanceInitialReplicationReplicasList <a name="FilestoreInstanceInitialReplicationReplicasList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceInitialReplicationReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.get"></a>

```typescript
public get(index: number): FilestoreInstanceInitialReplicationReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FilestoreInstanceInitialReplicationReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

---


### FilestoreInstanceInitialReplicationReplicasOutputReference <a name="FilestoreInstanceInitialReplicationReplicasOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput">peerInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance">peerInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerInstanceInput`<sup>Optional</sup> <a name="peerInstanceInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput"></a>

```typescript
public readonly peerInstanceInput: string;
```

- *Type:* string

---

##### `peerInstance`<sup>Required</sup> <a name="peerInstance" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance"></a>

```typescript
public readonly peerInstance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FilestoreInstanceInitialReplicationReplicas;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>

---


### FilestoreInstanceNetworksList <a name="FilestoreInstanceNetworksList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get"></a>

```typescript
public get(index: number): FilestoreInstanceNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FilestoreInstanceNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

---


### FilestoreInstanceNetworksOutputReference <a name="FilestoreInstanceNetworksOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode">resetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange">resetReservedIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectMode` <a name="resetConnectMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode"></a>

```typescript
public resetConnectMode(): void
```

##### `resetReservedIpRange` <a name="resetReservedIpRange" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange"></a>

```typescript
public resetReservedIpRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput">connectModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput">modesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode">connectMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes">modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `connectModeInput`<sup>Optional</sup> <a name="connectModeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput"></a>

```typescript
public readonly connectModeInput: string;
```

- *Type:* string

---

##### `modesInput`<sup>Optional</sup> <a name="modesInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput"></a>

```typescript
public readonly modesInput: string[];
```

- *Type:* string[]

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput"></a>

```typescript
public readonly reservedIpRangeInput: string;
```

- *Type:* string

---

##### `connectMode`<sup>Required</sup> <a name="connectMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FilestoreInstanceNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>

---


### FilestoreInstancePerformanceConfigFixedIopsOutputReference <a name="FilestoreInstancePerformanceConfigFixedIopsOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops">resetMaxIops</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIops` <a name="resetMaxIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops"></a>

```typescript
public resetMaxIops(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput">maxIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops">maxIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxIopsInput`<sup>Optional</sup> <a name="maxIopsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput"></a>

```typescript
public readonly maxIopsInput: number;
```

- *Type:* number

---

##### `maxIops`<sup>Required</sup> <a name="maxIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops"></a>

```typescript
public readonly maxIops: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FilestoreInstancePerformanceConfigFixedIops;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

---


### FilestoreInstancePerformanceConfigIopsPerTbOutputReference <a name="FilestoreInstancePerformanceConfigIopsPerTbOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb">resetMaxIopsPerTb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIopsPerTb` <a name="resetMaxIopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb"></a>

```typescript
public resetMaxIopsPerTb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput">maxIopsPerTbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb">maxIopsPerTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxIopsPerTbInput`<sup>Optional</sup> <a name="maxIopsPerTbInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput"></a>

```typescript
public readonly maxIopsPerTbInput: number;
```

- *Type:* number

---

##### `maxIopsPerTb`<sup>Required</sup> <a name="maxIopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb"></a>

```typescript
public readonly maxIopsPerTb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FilestoreInstancePerformanceConfigIopsPerTb;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

---


### FilestoreInstancePerformanceConfigOutputReference <a name="FilestoreInstancePerformanceConfigOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstancePerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putFixedIops">putFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putIopsPerTb">putIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetFixedIops">resetFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb">resetIopsPerTb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedIops` <a name="putFixedIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putFixedIops"></a>

```typescript
public putFixedIops(value: FilestoreInstancePerformanceConfigFixedIops): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putFixedIops.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

---

##### `putIopsPerTb` <a name="putIopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putIopsPerTb"></a>

```typescript
public putIopsPerTb(value: FilestoreInstancePerformanceConfigIopsPerTb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putIopsPerTb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `resetFixedIops` <a name="resetFixedIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetFixedIops"></a>

```typescript
public resetFixedIops(): void
```

##### `resetIopsPerTb` <a name="resetIopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb"></a>

```typescript
public resetIopsPerTb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIops">fixedIops</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference">FilestoreInstancePerformanceConfigFixedIopsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb">iopsPerTb</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference">FilestoreInstancePerformanceConfigIopsPerTbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput">fixedIopsInput</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput">iopsPerTbInput</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedIops`<sup>Required</sup> <a name="fixedIops" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIops"></a>

```typescript
public readonly fixedIops: FilestoreInstancePerformanceConfigFixedIopsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference">FilestoreInstancePerformanceConfigFixedIopsOutputReference</a>

---

##### `iopsPerTb`<sup>Required</sup> <a name="iopsPerTb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb"></a>

```typescript
public readonly iopsPerTb: FilestoreInstancePerformanceConfigIopsPerTbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference">FilestoreInstancePerformanceConfigIopsPerTbOutputReference</a>

---

##### `fixedIopsInput`<sup>Optional</sup> <a name="fixedIopsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput"></a>

```typescript
public readonly fixedIopsInput: FilestoreInstancePerformanceConfigFixedIops;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

---

##### `iopsPerTbInput`<sup>Optional</sup> <a name="iopsPerTbInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput"></a>

```typescript
public readonly iopsPerTbInput: FilestoreInstancePerformanceConfigIopsPerTb;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FilestoreInstancePerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

---


### FilestoreInstanceTimeoutsOutputReference <a name="FilestoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { filestoreInstance } from '@cdktf/provider-google'

new filestoreInstance.FilestoreInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FilestoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

---



