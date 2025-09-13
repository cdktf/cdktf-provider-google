# `cloudAssetFolderFeed` Submodule <a name="`cloudAssetFolderFeed` Submodule" id="@cdktf/provider-google.cloudAssetFolderFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAssetFolderFeed <a name="CloudAssetFolderFeed" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed google_cloud_asset_folder_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

new cloudAssetFolderFeed.CloudAssetFolderFeed(scope: Construct, id: string, config: CloudAssetFolderFeedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig">CloudAssetFolderFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig">CloudAssetFolderFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putFeedOutputConfig">putFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetAssetNames">resetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetAssetTypes">resetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putCondition"></a>

```typescript
public putCondition(value: CloudAssetFolderFeedCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition">CloudAssetFolderFeedCondition</a>

---

##### `putFeedOutputConfig` <a name="putFeedOutputConfig" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putFeedOutputConfig"></a>

```typescript
public putFeedOutputConfig(value: CloudAssetFolderFeedFeedOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig">CloudAssetFolderFeedFeedOutputConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudAssetFolderFeedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts">CloudAssetFolderFeedTimeouts</a>

---

##### `resetAssetNames` <a name="resetAssetNames" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetAssetNames"></a>

```typescript
public resetAssetNames(): void
```

##### `resetAssetTypes` <a name="resetAssetTypes" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetAssetTypes"></a>

```typescript
public resetAssetTypes(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAssetFolderFeed resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isConstruct"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

cloudAssetFolderFeed.CloudAssetFolderFeed.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformElement"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformResource"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.generateConfigForImport"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

cloudAssetFolderFeed.CloudAssetFolderFeed.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudAssetFolderFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAssetFolderFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAssetFolderFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudAssetFolderFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference">CloudAssetFolderFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference">CloudAssetFolderFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.folderId">folderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference">CloudAssetFolderFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetNamesInput">assetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetTypesInput">assetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.billingProjectInput">billingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition">CloudAssetFolderFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedIdInput">feedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedOutputConfigInput">feedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig">CloudAssetFolderFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts">CloudAssetFolderFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetNames">assetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetTypes">assetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.billingProject">billingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedId">feedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.condition"></a>

```typescript
public readonly condition: CloudAssetFolderFeedConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference">CloudAssetFolderFeedConditionOutputReference</a>

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedOutputConfig"></a>

```typescript
public readonly feedOutputConfig: CloudAssetFolderFeedFeedOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference">CloudAssetFolderFeedFeedOutputConfigOutputReference</a>

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.folderId"></a>

```typescript
public readonly folderId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.timeouts"></a>

```typescript
public readonly timeouts: CloudAssetFolderFeedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference">CloudAssetFolderFeedTimeoutsOutputReference</a>

---

##### `assetNamesInput`<sup>Optional</sup> <a name="assetNamesInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetNamesInput"></a>

```typescript
public readonly assetNamesInput: string[];
```

- *Type:* string[]

---

##### `assetTypesInput`<sup>Optional</sup> <a name="assetTypesInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetTypesInput"></a>

```typescript
public readonly assetTypesInput: string[];
```

- *Type:* string[]

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.billingProjectInput"></a>

```typescript
public readonly billingProjectInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.conditionInput"></a>

```typescript
public readonly conditionInput: CloudAssetFolderFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition">CloudAssetFolderFeedCondition</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `feedIdInput`<sup>Optional</sup> <a name="feedIdInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedIdInput"></a>

```typescript
public readonly feedIdInput: string;
```

- *Type:* string

---

##### `feedOutputConfigInput`<sup>Optional</sup> <a name="feedOutputConfigInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedOutputConfigInput"></a>

```typescript
public readonly feedOutputConfigInput: CloudAssetFolderFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig">CloudAssetFolderFeedFeedOutputConfig</a>

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudAssetFolderFeedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts">CloudAssetFolderFeedTimeouts</a>

---

##### `assetNames`<sup>Required</sup> <a name="assetNames" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetNames"></a>

```typescript
public readonly assetNames: string[];
```

- *Type:* string[]

---

##### `assetTypes`<sup>Required</sup> <a name="assetTypes" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.assetTypes"></a>

```typescript
public readonly assetTypes: string[];
```

- *Type:* string[]

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeed.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAssetFolderFeedCondition <a name="CloudAssetFolderFeedCondition" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

const cloudAssetFolderFeedCondition: cloudAssetFolderFeed.CloudAssetFolderFeedCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#expression CloudAssetFolderFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#description CloudAssetFolderFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#location CloudAssetFolderFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#title CloudAssetFolderFeed#title}

---

### CloudAssetFolderFeedConfig <a name="CloudAssetFolderFeedConfig" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

const cloudAssetFolderFeedConfig: cloudAssetFolderFeed.CloudAssetFolderFeedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.billingProject">billingProject</a></code> | <code>string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.feedId">feedId</a></code> | <code>string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig">CloudAssetFolderFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.folder">folder</a></code> | <code>string</code> | The folder this feed should be created in. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.assetNames">assetNames</a></code> | <code>string[]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.assetTypes">assetTypes</a></code> | <code>string[]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition">CloudAssetFolderFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.contentType">contentType</a></code> | <code>string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#id CloudAssetFolderFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts">CloudAssetFolderFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#billing_project CloudAssetFolderFeed#billing_project}

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#feed_id CloudAssetFolderFeed#feed_id}

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.feedOutputConfig"></a>

```typescript
public readonly feedOutputConfig: CloudAssetFolderFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig">CloudAssetFolderFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#feed_output_config CloudAssetFolderFeed#feed_output_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The folder this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#folder CloudAssetFolderFeed#folder}

---

##### `assetNames`<sup>Optional</sup> <a name="assetNames" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.assetNames"></a>

```typescript
public readonly assetNames: string[];
```

- *Type:* string[]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#asset_names CloudAssetFolderFeed#asset_names}

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.assetTypes"></a>

```typescript
public readonly assetTypes: string[];
```

- *Type:* string[]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#asset_types CloudAssetFolderFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.condition"></a>

```typescript
public readonly condition: CloudAssetFolderFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition">CloudAssetFolderFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#condition CloudAssetFolderFeed#condition}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#content_type CloudAssetFolderFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#id CloudAssetFolderFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudAssetFolderFeedTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts">CloudAssetFolderFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#timeouts CloudAssetFolderFeed#timeouts}

---

### CloudAssetFolderFeedFeedOutputConfig <a name="CloudAssetFolderFeedFeedOutputConfig" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

const cloudAssetFolderFeedFeedOutputConfig: cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination">CloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: CloudAssetFolderFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination">CloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#pubsub_destination CloudAssetFolderFeed#pubsub_destination}

---

### CloudAssetFolderFeedFeedOutputConfigPubsubDestination <a name="CloudAssetFolderFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

const cloudAssetFolderFeedFeedOutputConfigPubsubDestination: cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>string</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#topic CloudAssetFolderFeed#topic}

---

### CloudAssetFolderFeedTimeouts <a name="CloudAssetFolderFeedTimeouts" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

const cloudAssetFolderFeedTimeouts: cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#create CloudAssetFolderFeed#create}. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#delete CloudAssetFolderFeed#delete}. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#update CloudAssetFolderFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#create CloudAssetFolderFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#delete CloudAssetFolderFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/cloud_asset_folder_feed#update CloudAssetFolderFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAssetFolderFeedConditionOutputReference <a name="CloudAssetFolderFeedConditionOutputReference" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

new cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition">CloudAssetFolderFeedCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAssetFolderFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedCondition">CloudAssetFolderFeedCondition</a>

---


### CloudAssetFolderFeedFeedOutputConfigOutputReference <a name="CloudAssetFolderFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

new cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination">putPubsubDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsubDestination` <a name="putPubsubDestination" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```typescript
public putPubsubDestination(value: CloudAssetFolderFeedFeedOutputConfigPubsubDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination">CloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination">CloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig">CloudAssetFolderFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsubDestinationInput`<sup>Optional</sup> <a name="pubsubDestinationInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```typescript
public readonly pubsubDestinationInput: CloudAssetFolderFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination">CloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAssetFolderFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfig">CloudAssetFolderFeedFeedOutputConfig</a>

---


### CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference <a name="CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

new cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination">CloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAssetFolderFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedFeedOutputConfigPubsubDestination">CloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---


### CloudAssetFolderFeedTimeoutsOutputReference <a name="CloudAssetFolderFeedTimeoutsOutputReference" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudAssetFolderFeed } from '@cdktf/provider-google'

new cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts">CloudAssetFolderFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudAssetFolderFeedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudAssetFolderFeed.CloudAssetFolderFeedTimeouts">CloudAssetFolderFeedTimeouts</a>

---



