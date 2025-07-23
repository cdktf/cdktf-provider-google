# `discoveryEngineDataStore` Submodule <a name="`discoveryEngineDataStore` Submodule" id="@cdktf/provider-google.discoveryEngineDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataStore <a name="DiscoveryEngineDataStore" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store google_discovery_engine_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStore(scope: Construct, id: string, config: DiscoveryEngineDataStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig">DiscoveryEngineDataStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig">DiscoveryEngineDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig">putAdvancedSiteSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig">putDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAdvancedSiteSearchConfig">resetAdvancedSiteSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch">resetCreateAdvancedSiteSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDocumentProcessingConfig">resetDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSkipDefaultSchemaCreation">resetSkipDefaultSchemaCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes">resetSolutionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedSiteSearchConfig` <a name="putAdvancedSiteSearchConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig"></a>

```typescript
public putAdvancedSiteSearchConfig(value: DiscoveryEngineDataStoreAdvancedSiteSearchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---

##### `putDocumentProcessingConfig` <a name="putDocumentProcessingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig"></a>

```typescript
public putDocumentProcessingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineDataStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

---

##### `resetAdvancedSiteSearchConfig` <a name="resetAdvancedSiteSearchConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAdvancedSiteSearchConfig"></a>

```typescript
public resetAdvancedSiteSearchConfig(): void
```

##### `resetCreateAdvancedSiteSearch` <a name="resetCreateAdvancedSiteSearch" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch"></a>

```typescript
public resetCreateAdvancedSiteSearch(): void
```

##### `resetDocumentProcessingConfig` <a name="resetDocumentProcessingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDocumentProcessingConfig"></a>

```typescript
public resetDocumentProcessingConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSkipDefaultSchemaCreation` <a name="resetSkipDefaultSchemaCreation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSkipDefaultSchemaCreation"></a>

```typescript
public resetSkipDefaultSchemaCreation(): void
```

##### `resetSolutionTypes` <a name="resetSolutionTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes"></a>

```typescript
public resetSolutionTypes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineDataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfig">advancedSiteSearchConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference">DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId">defaultSchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfig">documentProcessingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfigInput">advancedSiteSearchConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput">contentConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput">createAdvancedSiteSearchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput">dataStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfigInput">documentProcessingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput">industryVerticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput">skipDefaultSchemaCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput">solutionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig">contentConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch">createAdvancedSiteSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical">industryVertical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreation">skipDefaultSchemaCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes">solutionTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedSiteSearchConfig`<sup>Required</sup> <a name="advancedSiteSearchConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfig"></a>

```typescript
public readonly advancedSiteSearchConfig: DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference">DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `defaultSchemaId`<sup>Required</sup> <a name="defaultSchemaId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId"></a>

```typescript
public readonly defaultSchemaId: string;
```

- *Type:* string

---

##### `documentProcessingConfig`<sup>Required</sup> <a name="documentProcessingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfig"></a>

```typescript
public readonly documentProcessingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineDataStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a>

---

##### `advancedSiteSearchConfigInput`<sup>Optional</sup> <a name="advancedSiteSearchConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfigInput"></a>

```typescript
public readonly advancedSiteSearchConfigInput: DiscoveryEngineDataStoreAdvancedSiteSearchConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---

##### `contentConfigInput`<sup>Optional</sup> <a name="contentConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput"></a>

```typescript
public readonly contentConfigInput: string;
```

- *Type:* string

---

##### `createAdvancedSiteSearchInput`<sup>Optional</sup> <a name="createAdvancedSiteSearchInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput"></a>

```typescript
public readonly createAdvancedSiteSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataStoreIdInput`<sup>Optional</sup> <a name="dataStoreIdInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput"></a>

```typescript
public readonly dataStoreIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentProcessingConfigInput`<sup>Optional</sup> <a name="documentProcessingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfigInput"></a>

```typescript
public readonly documentProcessingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput"></a>

```typescript
public readonly industryVerticalInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `skipDefaultSchemaCreationInput`<sup>Optional</sup> <a name="skipDefaultSchemaCreationInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput"></a>

```typescript
public readonly skipDefaultSchemaCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `solutionTypesInput`<sup>Optional</sup> <a name="solutionTypesInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput"></a>

```typescript
public readonly solutionTypesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineDataStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig"></a>

```typescript
public readonly contentConfig: string;
```

- *Type:* string

---

##### `createAdvancedSiteSearch`<sup>Required</sup> <a name="createAdvancedSiteSearch" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch"></a>

```typescript
public readonly createAdvancedSiteSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `skipDefaultSchemaCreation`<sup>Required</sup> <a name="skipDefaultSchemaCreation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreation"></a>

```typescript
public readonly skipDefaultSchemaCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `solutionTypes`<sup>Required</sup> <a name="solutionTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes"></a>

```typescript
public readonly solutionTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataStoreAdvancedSiteSearchConfig <a name="DiscoveryEngineDataStoreAdvancedSiteSearchConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreAdvancedSiteSearchConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableAutomaticRefresh">disableAutomaticRefresh</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set true, automatic refresh is disabled for the DataStore. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableInitialIndex">disableInitialIndex</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set true, initial indexing is disabled for the DataStore. |

---

##### `disableAutomaticRefresh`<sup>Optional</sup> <a name="disableAutomaticRefresh" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableAutomaticRefresh"></a>

```typescript
public readonly disableAutomaticRefresh: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set true, automatic refresh is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#disable_automatic_refresh DiscoveryEngineDataStore#disable_automatic_refresh}

---

##### `disableInitialIndex`<sup>Optional</sup> <a name="disableInitialIndex" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableInitialIndex"></a>

```typescript
public readonly disableInitialIndex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set true, initial indexing is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#disable_initial_index DiscoveryEngineDataStore#disable_initial_index}

---

### DiscoveryEngineDataStoreConfig <a name="DiscoveryEngineDataStoreConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig">contentConfig</a></code> | <code>string</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical">industryVertical</a></code> | <code>string</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.advancedSiteSearchConfig">advancedSiteSearchConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | advanced_site_search_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch">createAdvancedSiteSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.documentProcessingConfig">documentProcessingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | document_processing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | KMS key resource name which will be used to encrypt resources: '/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}' The KMS key to be used to protect this DataStore at creation time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation">skipDefaultSchemaCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean flag indicating whether to skip the default schema creation for the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes">solutionTypes</a></code> | <code>string[]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig"></a>

```typescript
public readonly contentConfig: string;
```

- *Type:* string

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}

---

##### `advancedSiteSearchConfig`<sup>Optional</sup> <a name="advancedSiteSearchConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.advancedSiteSearchConfig"></a>

```typescript
public readonly advancedSiteSearchConfig: DiscoveryEngineDataStoreAdvancedSiteSearchConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

advanced_site_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#advanced_site_search_config DiscoveryEngineDataStore#advanced_site_search_config}

---

##### `createAdvancedSiteSearch`<sup>Optional</sup> <a name="createAdvancedSiteSearch" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch"></a>

```typescript
public readonly createAdvancedSiteSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}

---

##### `documentProcessingConfig`<sup>Optional</sup> <a name="documentProcessingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.documentProcessingConfig"></a>

```typescript
public readonly documentProcessingConfig: DiscoveryEngineDataStoreDocumentProcessingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

document_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#document_processing_config DiscoveryEngineDataStore#document_processing_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

KMS key resource name which will be used to encrypt resources: '/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}' The KMS key to be used to protect this DataStore at creation time.

Must be
set for requests that need to comply with CMEK Org Policy protections.
If this field is set and processed successfully, the DataStore will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#kms_key_name DiscoveryEngineDataStore#kms_key_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}.

---

##### `skipDefaultSchemaCreation`<sup>Optional</sup> <a name="skipDefaultSchemaCreation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation"></a>

```typescript
public readonly skipDefaultSchemaCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean flag indicating whether to skip the default schema creation for the data store.

Only enable this flag if you are certain that the default
schema is incompatible with your use case.
If set to true, you must manually create a schema for the data store
before any documents can be ingested.
This flag cannot be specified if 'data_store.starting_schema' is
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#skip_default_schema_creation DiscoveryEngineDataStore#skip_default_schema_creation}

---

##### `solutionTypes`<sup>Optional</sup> <a name="solutionTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes"></a>

```typescript
public readonly solutionTypes: string[];
```

- *Type:* string[]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineDataStoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}

---

### DiscoveryEngineDataStoreDocumentProcessingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig">chunkingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | chunking_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig">defaultParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | default_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides">parsingConfigOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>[]</code> | parsing_config_overrides block. |

---

##### `chunkingConfig`<sup>Optional</sup> <a name="chunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig"></a>

```typescript
public readonly chunkingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#chunking_config DiscoveryEngineDataStore#chunking_config}

---

##### `defaultParsingConfig`<sup>Optional</sup> <a name="defaultParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig"></a>

```typescript
public readonly defaultParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

default_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#default_parsing_config DiscoveryEngineDataStore#default_parsing_config}

---

##### `parsingConfigOverrides`<sup>Optional</sup> <a name="parsingConfigOverrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides"></a>

```typescript
public readonly parsingConfigOverrides: IResolvable | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>[]

parsing_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#parsing_config_overrides DiscoveryEngineDataStore#parsing_config_overrides}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigChunkingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig">layoutBasedChunkingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | layout_based_chunking_config block. |

---

##### `layoutBasedChunkingConfig`<sup>Optional</sup> <a name="layoutBasedChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig"></a>

```typescript
public readonly layoutBasedChunkingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

layout_based_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#layout_based_chunking_config DiscoveryEngineDataStore#layout_based_chunking_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize">chunkSize</a></code> | <code>number</code> | The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings">includeAncestorHeadings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss. |

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize"></a>

```typescript
public readonly chunkSize: number;
```

- *Type:* number

The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#chunk_size DiscoveryEngineDataStore#chunk_size}

---

##### `includeAncestorHeadings`<sup>Optional</sup> <a name="includeAncestorHeadings" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings"></a>

```typescript
public readonly includeAncestorHeadings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.

Default value: False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#include_ancestor_headings DiscoveryEngineDataStore#include_ancestor_headings}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `digitalParsingConfig`<sup>Optional</sup> <a name="digitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig"></a>

```typescript
public readonly digitalParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}

---

##### `layoutParsingConfig`<sup>Optional</sup> <a name="layoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig"></a>

```typescript
public readonly layoutParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocrParsingConfig`<sup>Optional</sup> <a name="ocrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig"></a>

```typescript
public readonly ocrParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig = { ... }
```


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the LLM based annotation is added to the image during parsing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the LLM based annotation is added to the table during parsing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>string[]</code> | List of HTML classes to exclude from the parsed content. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>string[]</code> | List of HTML elements to exclude from the parsed content. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>string[]</code> | List of HTML ids to exclude from the parsed content. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.structuredContentTypes">structuredContentTypes</a></code> | <code>string[]</code> | Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'. |

---

##### `enableImageAnnotation`<sup>Optional</sup> <a name="enableImageAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableImageAnnotation"></a>

```typescript
public readonly enableImageAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the LLM based annotation is added to the image during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_image_annotation DiscoveryEngineDataStore#enable_image_annotation}

---

##### `enableTableAnnotation`<sup>Optional</sup> <a name="enableTableAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableTableAnnotation"></a>

```typescript
public readonly enableTableAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the LLM based annotation is added to the table during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_table_annotation DiscoveryEngineDataStore#enable_table_annotation}

---

##### `excludeHtmlClasses`<sup>Optional</sup> <a name="excludeHtmlClasses" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlClasses"></a>

```typescript
public readonly excludeHtmlClasses: string[];
```

- *Type:* string[]

List of HTML classes to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_classes DiscoveryEngineDataStore#exclude_html_classes}

---

##### `excludeHtmlElements`<sup>Optional</sup> <a name="excludeHtmlElements" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlElements"></a>

```typescript
public readonly excludeHtmlElements: string[];
```

- *Type:* string[]

List of HTML elements to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_elements DiscoveryEngineDataStore#exclude_html_elements}

---

##### `excludeHtmlIds`<sup>Optional</sup> <a name="excludeHtmlIds" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlIds"></a>

```typescript
public readonly excludeHtmlIds: string[];
```

- *Type:* string[]

List of HTML ids to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_ids DiscoveryEngineDataStore#exclude_html_ids}

---

##### `structuredContentTypes`<sup>Optional</sup> <a name="structuredContentTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.structuredContentTypes"></a>

```typescript
public readonly structuredContentTypes: string[];
```

- *Type:* string[]

Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#structured_content_types DiscoveryEngineDataStore#structured_content_types}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText">useNativeText</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `useNativeText`<sup>Optional</sup> <a name="useNativeText" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText"></a>

```typescript
public readonly useNativeText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType">fileType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#file_type DiscoveryEngineDataStore#file_type}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#file_type DiscoveryEngineDataStore#file_type}.

---

##### `digitalParsingConfig`<sup>Optional</sup> <a name="digitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig"></a>

```typescript
public readonly digitalParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}

---

##### `layoutParsingConfig`<sup>Optional</sup> <a name="layoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig"></a>

```typescript
public readonly layoutParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocrParsingConfig`<sup>Optional</sup> <a name="ocrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig"></a>

```typescript
public readonly ocrParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig = { ... }
```


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the LLM based annotation is added to the image during parsing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the LLM based annotation is added to the table during parsing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>string[]</code> | List of HTML classes to exclude from the parsed content. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>string[]</code> | List of HTML elements to exclude from the parsed content. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>string[]</code> | List of HTML ids to exclude from the parsed content. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.structuredContentTypes">structuredContentTypes</a></code> | <code>string[]</code> | Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'. |

---

##### `enableImageAnnotation`<sup>Optional</sup> <a name="enableImageAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableImageAnnotation"></a>

```typescript
public readonly enableImageAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the LLM based annotation is added to the image during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_image_annotation DiscoveryEngineDataStore#enable_image_annotation}

---

##### `enableTableAnnotation`<sup>Optional</sup> <a name="enableTableAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableTableAnnotation"></a>

```typescript
public readonly enableTableAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the LLM based annotation is added to the table during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_table_annotation DiscoveryEngineDataStore#enable_table_annotation}

---

##### `excludeHtmlClasses`<sup>Optional</sup> <a name="excludeHtmlClasses" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlClasses"></a>

```typescript
public readonly excludeHtmlClasses: string[];
```

- *Type:* string[]

List of HTML classes to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_classes DiscoveryEngineDataStore#exclude_html_classes}

---

##### `excludeHtmlElements`<sup>Optional</sup> <a name="excludeHtmlElements" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlElements"></a>

```typescript
public readonly excludeHtmlElements: string[];
```

- *Type:* string[]

List of HTML elements to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_elements DiscoveryEngineDataStore#exclude_html_elements}

---

##### `excludeHtmlIds`<sup>Optional</sup> <a name="excludeHtmlIds" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlIds"></a>

```typescript
public readonly excludeHtmlIds: string[];
```

- *Type:* string[]

List of HTML ids to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_ids DiscoveryEngineDataStore#exclude_html_ids}

---

##### `structuredContentTypes`<sup>Optional</sup> <a name="structuredContentTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.structuredContentTypes"></a>

```typescript
public readonly structuredContentTypes: string[];
```

- *Type:* string[]

Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#structured_content_types DiscoveryEngineDataStore#structured_content_types}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig: discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText">useNativeText</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `useNativeText`<sup>Optional</sup> <a name="useNativeText" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText"></a>

```typescript
public readonly useNativeText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

### DiscoveryEngineDataStoreTimeouts <a name="DiscoveryEngineDataStoreTimeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

const discoveryEngineDataStoreTimeouts: discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference <a name="DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableAutomaticRefresh">resetDisableAutomaticRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableInitialIndex">resetDisableInitialIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableAutomaticRefresh` <a name="resetDisableAutomaticRefresh" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableAutomaticRefresh"></a>

```typescript
public resetDisableAutomaticRefresh(): void
```

##### `resetDisableInitialIndex` <a name="resetDisableInitialIndex" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableInitialIndex"></a>

```typescript
public resetDisableInitialIndex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefreshInput">disableAutomaticRefreshInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndexInput">disableInitialIndexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh">disableAutomaticRefresh</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex">disableInitialIndex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableAutomaticRefreshInput`<sup>Optional</sup> <a name="disableAutomaticRefreshInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefreshInput"></a>

```typescript
public readonly disableAutomaticRefreshInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableInitialIndexInput`<sup>Optional</sup> <a name="disableInitialIndexInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndexInput"></a>

```typescript
public readonly disableInitialIndexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableAutomaticRefresh`<sup>Required</sup> <a name="disableAutomaticRefresh" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh"></a>

```typescript
public readonly disableAutomaticRefresh: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableInitialIndex`<sup>Required</sup> <a name="disableInitialIndex" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex"></a>

```typescript
public readonly disableInitialIndex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreAdvancedSiteSearchConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings">resetIncludeAncestorHeadings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize"></a>

```typescript
public resetChunkSize(): void
```

##### `resetIncludeAncestorHeadings` <a name="resetIncludeAncestorHeadings" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings"></a>

```typescript
public resetIncludeAncestorHeadings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput">includeAncestorHeadingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize">chunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings">includeAncestorHeadings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput"></a>

```typescript
public readonly chunkSizeInput: number;
```

- *Type:* number

---

##### `includeAncestorHeadingsInput`<sup>Optional</sup> <a name="includeAncestorHeadingsInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput"></a>

```typescript
public readonly includeAncestorHeadingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize"></a>

```typescript
public readonly chunkSize: number;
```

- *Type:* number

---

##### `includeAncestorHeadings`<sup>Required</sup> <a name="includeAncestorHeadings" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings"></a>

```typescript
public readonly includeAncestorHeadings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig">putLayoutBasedChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig">resetLayoutBasedChunkingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayoutBasedChunkingConfig` <a name="putLayoutBasedChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig"></a>

```typescript
public putLayoutBasedChunkingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---

##### `resetLayoutBasedChunkingConfig` <a name="resetLayoutBasedChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig"></a>

```typescript
public resetLayoutBasedChunkingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig">layoutBasedChunkingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput">layoutBasedChunkingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `layoutBasedChunkingConfig`<sup>Required</sup> <a name="layoutBasedChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig"></a>

```typescript
public readonly layoutBasedChunkingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a>

---

##### `layoutBasedChunkingConfigInput`<sup>Optional</sup> <a name="layoutBasedChunkingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput"></a>

```typescript
public readonly layoutBasedChunkingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableImageAnnotation">resetEnableImageAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableTableAnnotation">resetEnableTableAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlClasses">resetExcludeHtmlClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlElements">resetExcludeHtmlElements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlIds">resetExcludeHtmlIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetStructuredContentTypes">resetStructuredContentTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableImageAnnotation` <a name="resetEnableImageAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableImageAnnotation"></a>

```typescript
public resetEnableImageAnnotation(): void
```

##### `resetEnableTableAnnotation` <a name="resetEnableTableAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableTableAnnotation"></a>

```typescript
public resetEnableTableAnnotation(): void
```

##### `resetExcludeHtmlClasses` <a name="resetExcludeHtmlClasses" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlClasses"></a>

```typescript
public resetExcludeHtmlClasses(): void
```

##### `resetExcludeHtmlElements` <a name="resetExcludeHtmlElements" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlElements"></a>

```typescript
public resetExcludeHtmlElements(): void
```

##### `resetExcludeHtmlIds` <a name="resetExcludeHtmlIds" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlIds"></a>

```typescript
public resetExcludeHtmlIds(): void
```

##### `resetStructuredContentTypes` <a name="resetStructuredContentTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetStructuredContentTypes"></a>

```typescript
public resetStructuredContentTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotationInput">enableImageAnnotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotationInput">enableTableAnnotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput">excludeHtmlClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput">excludeHtmlElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput">excludeHtmlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypesInput">structuredContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypes">structuredContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableImageAnnotationInput`<sup>Optional</sup> <a name="enableImageAnnotationInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotationInput"></a>

```typescript
public readonly enableImageAnnotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTableAnnotationInput`<sup>Optional</sup> <a name="enableTableAnnotationInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotationInput"></a>

```typescript
public readonly enableTableAnnotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeHtmlClassesInput`<sup>Optional</sup> <a name="excludeHtmlClassesInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput"></a>

```typescript
public readonly excludeHtmlClassesInput: string[];
```

- *Type:* string[]

---

##### `excludeHtmlElementsInput`<sup>Optional</sup> <a name="excludeHtmlElementsInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput"></a>

```typescript
public readonly excludeHtmlElementsInput: string[];
```

- *Type:* string[]

---

##### `excludeHtmlIdsInput`<sup>Optional</sup> <a name="excludeHtmlIdsInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput"></a>

```typescript
public readonly excludeHtmlIdsInput: string[];
```

- *Type:* string[]

---

##### `structuredContentTypesInput`<sup>Optional</sup> <a name="structuredContentTypesInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypesInput"></a>

```typescript
public readonly structuredContentTypesInput: string[];
```

- *Type:* string[]

---

##### `enableImageAnnotation`<sup>Required</sup> <a name="enableImageAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotation"></a>

```typescript
public readonly enableImageAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTableAnnotation`<sup>Required</sup> <a name="enableTableAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotation"></a>

```typescript
public readonly enableTableAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeHtmlClasses`<sup>Required</sup> <a name="excludeHtmlClasses" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClasses"></a>

```typescript
public readonly excludeHtmlClasses: string[];
```

- *Type:* string[]

---

##### `excludeHtmlElements`<sup>Required</sup> <a name="excludeHtmlElements" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElements"></a>

```typescript
public readonly excludeHtmlElements: string[];
```

- *Type:* string[]

---

##### `excludeHtmlIds`<sup>Required</sup> <a name="excludeHtmlIds" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIds"></a>

```typescript
public readonly excludeHtmlIds: string[];
```

- *Type:* string[]

---

##### `structuredContentTypes`<sup>Required</sup> <a name="structuredContentTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypes"></a>

```typescript
public readonly structuredContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText">resetUseNativeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseNativeText` <a name="resetUseNativeText" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText"></a>

```typescript
public resetUseNativeText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput">useNativeTextInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText">useNativeText</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useNativeTextInput`<sup>Optional</sup> <a name="useNativeTextInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```typescript
public readonly useNativeTextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useNativeText`<sup>Required</sup> <a name="useNativeText" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText"></a>

```typescript
public readonly useNativeText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig">putDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig">putLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig">putOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig">resetDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig">resetLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig">resetOcrParsingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDigitalParsingConfig` <a name="putDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig"></a>

```typescript
public putDigitalParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---

##### `putLayoutParsingConfig` <a name="putLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig"></a>

```typescript
public putLayoutParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---

##### `putOcrParsingConfig` <a name="putOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig"></a>

```typescript
public putOcrParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---

##### `resetDigitalParsingConfig` <a name="resetDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig"></a>

```typescript
public resetDigitalParsingConfig(): void
```

##### `resetLayoutParsingConfig` <a name="resetLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig"></a>

```typescript
public resetLayoutParsingConfig(): void
```

##### `resetOcrParsingConfig` <a name="resetOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig"></a>

```typescript
public resetOcrParsingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput">digitalParsingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput">layoutParsingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput">ocrParsingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digitalParsingConfig`<sup>Required</sup> <a name="digitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig"></a>

```typescript
public readonly digitalParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a>

---

##### `layoutParsingConfig`<sup>Required</sup> <a name="layoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig"></a>

```typescript
public readonly layoutParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a>

---

##### `ocrParsingConfig`<sup>Required</sup> <a name="ocrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig"></a>

```typescript
public readonly ocrParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a>

---

##### `digitalParsingConfigInput`<sup>Optional</sup> <a name="digitalParsingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput"></a>

```typescript
public readonly digitalParsingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---

##### `layoutParsingConfigInput`<sup>Optional</sup> <a name="layoutParsingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput"></a>

```typescript
public readonly layoutParsingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---

##### `ocrParsingConfigInput`<sup>Optional</sup> <a name="ocrParsingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput"></a>

```typescript
public readonly ocrParsingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig">putChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig">putDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides">putParsingConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig">resetChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig">resetDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides">resetParsingConfigOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChunkingConfig` <a name="putChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig"></a>

```typescript
public putChunkingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---

##### `putDefaultParsingConfig` <a name="putDefaultParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig"></a>

```typescript
public putDefaultParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---

##### `putParsingConfigOverrides` <a name="putParsingConfigOverrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides"></a>

```typescript
public putParsingConfigOverrides(value: IResolvable | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>[]

---

##### `resetChunkingConfig` <a name="resetChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig"></a>

```typescript
public resetChunkingConfig(): void
```

##### `resetDefaultParsingConfig` <a name="resetDefaultParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig"></a>

```typescript
public resetDefaultParsingConfig(): void
```

##### `resetParsingConfigOverrides` <a name="resetParsingConfigOverrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides"></a>

```typescript
public resetParsingConfigOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig">chunkingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig">defaultParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides">parsingConfigOverrides</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput">chunkingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput">defaultParsingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput">parsingConfigOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chunkingConfig`<sup>Required</sup> <a name="chunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig"></a>

```typescript
public readonly chunkingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a>

---

##### `defaultParsingConfig`<sup>Required</sup> <a name="defaultParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig"></a>

```typescript
public readonly defaultParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parsingConfigOverrides`<sup>Required</sup> <a name="parsingConfigOverrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides"></a>

```typescript
public readonly parsingConfigOverrides: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a>

---

##### `chunkingConfigInput`<sup>Optional</sup> <a name="chunkingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput"></a>

```typescript
public readonly chunkingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---

##### `defaultParsingConfigInput`<sup>Optional</sup> <a name="defaultParsingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput"></a>

```typescript
public readonly defaultParsingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---

##### `parsingConfigOverridesInput`<sup>Optional</sup> <a name="parsingConfigOverridesInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput"></a>

```typescript
public readonly parsingConfigOverridesInput: IResolvable | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableImageAnnotation">resetEnableImageAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableTableAnnotation">resetEnableTableAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlClasses">resetExcludeHtmlClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlElements">resetExcludeHtmlElements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlIds">resetExcludeHtmlIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetStructuredContentTypes">resetStructuredContentTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableImageAnnotation` <a name="resetEnableImageAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableImageAnnotation"></a>

```typescript
public resetEnableImageAnnotation(): void
```

##### `resetEnableTableAnnotation` <a name="resetEnableTableAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableTableAnnotation"></a>

```typescript
public resetEnableTableAnnotation(): void
```

##### `resetExcludeHtmlClasses` <a name="resetExcludeHtmlClasses" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlClasses"></a>

```typescript
public resetExcludeHtmlClasses(): void
```

##### `resetExcludeHtmlElements` <a name="resetExcludeHtmlElements" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlElements"></a>

```typescript
public resetExcludeHtmlElements(): void
```

##### `resetExcludeHtmlIds` <a name="resetExcludeHtmlIds" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlIds"></a>

```typescript
public resetExcludeHtmlIds(): void
```

##### `resetStructuredContentTypes` <a name="resetStructuredContentTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetStructuredContentTypes"></a>

```typescript
public resetStructuredContentTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotationInput">enableImageAnnotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotationInput">enableTableAnnotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput">excludeHtmlClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput">excludeHtmlElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput">excludeHtmlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypesInput">structuredContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypes">structuredContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableImageAnnotationInput`<sup>Optional</sup> <a name="enableImageAnnotationInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotationInput"></a>

```typescript
public readonly enableImageAnnotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTableAnnotationInput`<sup>Optional</sup> <a name="enableTableAnnotationInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotationInput"></a>

```typescript
public readonly enableTableAnnotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeHtmlClassesInput`<sup>Optional</sup> <a name="excludeHtmlClassesInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput"></a>

```typescript
public readonly excludeHtmlClassesInput: string[];
```

- *Type:* string[]

---

##### `excludeHtmlElementsInput`<sup>Optional</sup> <a name="excludeHtmlElementsInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput"></a>

```typescript
public readonly excludeHtmlElementsInput: string[];
```

- *Type:* string[]

---

##### `excludeHtmlIdsInput`<sup>Optional</sup> <a name="excludeHtmlIdsInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput"></a>

```typescript
public readonly excludeHtmlIdsInput: string[];
```

- *Type:* string[]

---

##### `structuredContentTypesInput`<sup>Optional</sup> <a name="structuredContentTypesInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypesInput"></a>

```typescript
public readonly structuredContentTypesInput: string[];
```

- *Type:* string[]

---

##### `enableImageAnnotation`<sup>Required</sup> <a name="enableImageAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotation"></a>

```typescript
public readonly enableImageAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTableAnnotation`<sup>Required</sup> <a name="enableTableAnnotation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotation"></a>

```typescript
public readonly enableTableAnnotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeHtmlClasses`<sup>Required</sup> <a name="excludeHtmlClasses" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClasses"></a>

```typescript
public readonly excludeHtmlClasses: string[];
```

- *Type:* string[]

---

##### `excludeHtmlElements`<sup>Required</sup> <a name="excludeHtmlElements" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElements"></a>

```typescript
public readonly excludeHtmlElements: string[];
```

- *Type:* string[]

---

##### `excludeHtmlIds`<sup>Required</sup> <a name="excludeHtmlIds" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIds"></a>

```typescript
public readonly excludeHtmlIds: string[];
```

- *Type:* string[]

---

##### `structuredContentTypes`<sup>Required</sup> <a name="structuredContentTypes" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypes"></a>

```typescript
public readonly structuredContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get"></a>

```typescript
public get(index: number): DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>[]

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText">resetUseNativeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseNativeText` <a name="resetUseNativeText" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText"></a>

```typescript
public resetUseNativeText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput">useNativeTextInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText">useNativeText</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useNativeTextInput`<sup>Optional</sup> <a name="useNativeTextInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```typescript
public readonly useNativeTextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useNativeText`<sup>Required</sup> <a name="useNativeText" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText"></a>

```typescript
public readonly useNativeText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig">putDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig">putLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig">putOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig">resetDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig">resetLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig">resetOcrParsingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDigitalParsingConfig` <a name="putDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig"></a>

```typescript
public putDigitalParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---

##### `putLayoutParsingConfig` <a name="putLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig"></a>

```typescript
public putLayoutParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---

##### `putOcrParsingConfig` <a name="putOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig"></a>

```typescript
public putOcrParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---

##### `resetDigitalParsingConfig` <a name="resetDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig"></a>

```typescript
public resetDigitalParsingConfig(): void
```

##### `resetLayoutParsingConfig` <a name="resetLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig"></a>

```typescript
public resetLayoutParsingConfig(): void
```

##### `resetOcrParsingConfig` <a name="resetOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig"></a>

```typescript
public resetOcrParsingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput">digitalParsingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput">layoutParsingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput">ocrParsingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digitalParsingConfig`<sup>Required</sup> <a name="digitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig"></a>

```typescript
public readonly digitalParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a>

---

##### `layoutParsingConfig`<sup>Required</sup> <a name="layoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig"></a>

```typescript
public readonly layoutParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a>

---

##### `ocrParsingConfig`<sup>Required</sup> <a name="ocrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig"></a>

```typescript
public readonly ocrParsingConfig: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a>

---

##### `digitalParsingConfigInput`<sup>Optional</sup> <a name="digitalParsingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput"></a>

```typescript
public readonly digitalParsingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput"></a>

```typescript
public readonly fileTypeInput: string;
```

- *Type:* string

---

##### `layoutParsingConfigInput`<sup>Optional</sup> <a name="layoutParsingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput"></a>

```typescript
public readonly layoutParsingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---

##### `ocrParsingConfigInput`<sup>Optional</sup> <a name="ocrParsingConfigInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput"></a>

```typescript
public readonly ocrParsingConfigInput: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>

---


### DiscoveryEngineDataStoreTimeoutsOutputReference <a name="DiscoveryEngineDataStoreTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataStore } from '@cdktf/provider-google'

new discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

---



