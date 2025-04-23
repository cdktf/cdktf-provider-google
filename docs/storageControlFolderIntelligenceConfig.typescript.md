# `storageControlFolderIntelligenceConfig` Submodule <a name="`storageControlFolderIntelligenceConfig` Submodule" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageControlFolderIntelligenceConfig <a name="StorageControlFolderIntelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config google_storage_control_folder_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig(scope: Construct, id: string, config: StorageControlFolderIntelligenceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig">StorageControlFolderIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig">StorageControlFolderIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetEditionConfig">resetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putFilter"></a>

```typescript
public putFilter(value: StorageControlFolderIntelligenceConfigFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageControlFolderIntelligenceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a>

---

##### `resetEditionConfig` <a name="resetEditionConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetEditionConfig"></a>

```typescript
public resetEditionConfig(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isConstruct"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformElement"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformResource"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageControlFolderIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageControlFolderIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageControlFolderIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig">effectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference">StorageControlFolderIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference">StorageControlFolderIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.trialConfig">trialConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList">StorageControlFolderIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfigInput">editionConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfig">editionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveIntelligenceConfig`<sup>Required</sup> <a name="effectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```typescript
public readonly effectiveIntelligenceConfig: StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filter"></a>

```typescript
public readonly filter: StorageControlFolderIntelligenceConfigFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference">StorageControlFolderIntelligenceConfigFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageControlFolderIntelligenceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference">StorageControlFolderIntelligenceConfigTimeoutsOutputReference</a>

---

##### `trialConfig`<sup>Required</sup> <a name="trialConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.trialConfig"></a>

```typescript
public readonly trialConfig: StorageControlFolderIntelligenceConfigTrialConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList">StorageControlFolderIntelligenceConfigTrialConfigList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `editionConfigInput`<sup>Optional</sup> <a name="editionConfigInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfigInput"></a>

```typescript
public readonly editionConfigInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.filterInput"></a>

```typescript
public readonly filterInput: StorageControlFolderIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageControlFolderIntelligenceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a>

---

##### `editionConfig`<sup>Required</sup> <a name="editionConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.editionConfig"></a>

```typescript
public readonly editionConfig: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageControlFolderIntelligenceConfigConfig <a name="StorageControlFolderIntelligenceConfigConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigConfig: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.name">name</a></code> | <code>string</code> | Identifier of the GCP Folder. For GCP Folder, this field can be folder number. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.editionConfig">editionConfig</a></code> | <code>string</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#id StorageControlFolderIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier of the GCP Folder. For GCP Folder, this field can be folder number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#name StorageControlFolderIntelligenceConfig#name}

---

##### `editionConfig`<sup>Optional</sup> <a name="editionConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.editionConfig"></a>

```typescript
public readonly editionConfig: string;
```

- *Type:* string

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#edition_config StorageControlFolderIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.filter"></a>

```typescript
public readonly filter: StorageControlFolderIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#filter StorageControlFolderIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#id StorageControlFolderIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageControlFolderIntelligenceConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#timeouts StorageControlFolderIntelligenceConfig#timeouts}

---

### StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig <a name="StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigEffectiveIntelligenceConfig: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig = { ... }
```


### StorageControlFolderIntelligenceConfigFilter <a name="StorageControlFolderIntelligenceConfigFilter" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigFilter: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `excludedCloudStorageBuckets`<sup>Optional</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```typescript
public readonly excludedCloudStorageBuckets: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#excluded_cloud_storage_buckets StorageControlFolderIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `excludedCloudStorageLocations`<sup>Optional</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```typescript
public readonly excludedCloudStorageLocations: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#excluded_cloud_storage_locations StorageControlFolderIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `includedCloudStorageBuckets`<sup>Optional</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#included_cloud_storage_buckets StorageControlFolderIntelligenceConfig#included_cloud_storage_buckets}

---

##### `includedCloudStorageLocations`<sup>Optional</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```typescript
public readonly includedCloudStorageLocations: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#included_cloud_storage_locations StorageControlFolderIntelligenceConfig#included_cloud_storage_locations}

---

### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#bucket_id_regexes StorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#locations StorageControlFolderIntelligenceConfig#locations}

---

### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#bucket_id_regexes StorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#locations StorageControlFolderIntelligenceConfig#locations}

---

### StorageControlFolderIntelligenceConfigTimeouts <a name="StorageControlFolderIntelligenceConfigTimeouts" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigTimeouts: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#create StorageControlFolderIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#delete StorageControlFolderIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#update StorageControlFolderIntelligenceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#create StorageControlFolderIntelligenceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#delete StorageControlFolderIntelligenceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_control_folder_intelligence_config#update StorageControlFolderIntelligenceConfig#update}.

---

### StorageControlFolderIntelligenceConfigTrialConfig <a name="StorageControlFolderIntelligenceConfigTrialConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

const storageControlFolderIntelligenceConfigTrialConfig: storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList <a name="StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```typescript
public get(index: number): StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effectiveEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligenceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveEdition`<sup>Required</sup> <a name="effectiveEdition" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```typescript
public readonly effectiveEdition: string;
```

- *Type:* string

---

##### `intelligenceConfig`<sup>Required</sup> <a name="intelligenceConfig" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```typescript
public readonly intelligenceConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">StorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```typescript
public readonly bucketIdRegexesInput: string[];
```

- *Type:* string[]

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```typescript
public readonly bucketIdRegexesInput: string[];
```

- *Type:* string[]

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### StorageControlFolderIntelligenceConfigFilterOutputReference <a name="StorageControlFolderIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">putExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">putExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">putIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">putIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">resetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">resetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">resetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">resetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludedCloudStorageBuckets` <a name="putExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```typescript
public putExcludedCloudStorageBuckets(value: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `putExcludedCloudStorageLocations` <a name="putExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```typescript
public putExcludedCloudStorageLocations(value: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `putIncludedCloudStorageBuckets` <a name="putIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```typescript
public putIncludedCloudStorageBuckets(value: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `putIncludedCloudStorageLocations` <a name="putIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```typescript
public putIncludedCloudStorageLocations(value: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `resetExcludedCloudStorageBuckets` <a name="resetExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```typescript
public resetExcludedCloudStorageBuckets(): void
```

##### `resetExcludedCloudStorageLocations` <a name="resetExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```typescript
public resetExcludedCloudStorageLocations(): void
```

##### `resetIncludedCloudStorageBuckets` <a name="resetIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```typescript
public resetIncludedCloudStorageBuckets(): void
```

##### `resetIncludedCloudStorageLocations` <a name="resetIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```typescript
public resetIncludedCloudStorageLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">excludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">excludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">includedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">includedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedCloudStorageBuckets`<sup>Required</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```typescript
public readonly excludedCloudStorageBuckets: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `excludedCloudStorageLocations`<sup>Required</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```typescript
public readonly excludedCloudStorageLocations: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `includedCloudStorageLocations`<sup>Required</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```typescript
public readonly includedCloudStorageLocations: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `excludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="excludedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```typescript
public readonly excludedCloudStorageBucketsInput: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `excludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="excludedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```typescript
public readonly excludedCloudStorageLocationsInput: StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `includedCloudStorageBucketsInput`<sup>Optional</sup> <a name="includedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```typescript
public readonly includedCloudStorageBucketsInput: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `includedCloudStorageLocationsInput`<sup>Optional</sup> <a name="includedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```typescript
public readonly includedCloudStorageLocationsInput: StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageControlFolderIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigFilter">StorageControlFolderIntelligenceConfigFilter</a>

---


### StorageControlFolderIntelligenceConfigTimeoutsOutputReference <a name="StorageControlFolderIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageControlFolderIntelligenceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTimeouts">StorageControlFolderIntelligenceConfigTimeouts</a>

---


### StorageControlFolderIntelligenceConfigTrialConfigList <a name="StorageControlFolderIntelligenceConfigTrialConfigList" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.get"></a>

```typescript
public get(index: number): StorageControlFolderIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StorageControlFolderIntelligenceConfigTrialConfigOutputReference <a name="StorageControlFolderIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```typescript
import { storageControlFolderIntelligenceConfig } from '@cdktf/provider-google'

new storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig">StorageControlFolderIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageControlFolderIntelligenceConfigTrialConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageControlFolderIntelligenceConfig.StorageControlFolderIntelligenceConfigTrialConfig">StorageControlFolderIntelligenceConfigTrialConfig</a>

---



