# `cloudAssetProjectFeed` Submodule <a name="`cloudAssetProjectFeed` Submodule" id="@cdktf/provider-google.cloudAssetProjectFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAssetProjectFeed <a name="CloudAssetProjectFeed" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed google_cloud_asset_project_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

new cloudAssetProjectFeed.CloudAssetProjectFeed(scope: Construct, id: string, config: CloudAssetProjectFeedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig">CloudAssetProjectFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig">CloudAssetProjectFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig">putFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetNames">resetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetTypes">resetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetBillingProject">resetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition"></a>

```typescript
public putCondition(value: CloudAssetProjectFeedCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---

##### `putFeedOutputConfig` <a name="putFeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig"></a>

```typescript
public putFeedOutputConfig(value: CloudAssetProjectFeedFeedOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudAssetProjectFeedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

---

##### `resetAssetNames` <a name="resetAssetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetNames"></a>

```typescript
public resetAssetNames(): void
```

##### `resetAssetTypes` <a name="resetAssetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetTypes"></a>

```typescript
public resetAssetTypes(): void
```

##### `resetBillingProject` <a name="resetBillingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetBillingProject"></a>

```typescript
public resetBillingProject(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAssetProjectFeed resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudAssetProjectFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAssetProjectFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAssetProjectFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudAssetProjectFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference">CloudAssetProjectFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference">CloudAssetProjectFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference">CloudAssetProjectFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNamesInput">assetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypesInput">assetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProjectInput">billingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedIdInput">feedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfigInput">feedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNames">assetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypes">assetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProject">billingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedId">feedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.condition"></a>

```typescript
public readonly condition: CloudAssetProjectFeedConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference">CloudAssetProjectFeedConditionOutputReference</a>

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfig"></a>

```typescript
public readonly feedOutputConfig: CloudAssetProjectFeedFeedOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference">CloudAssetProjectFeedFeedOutputConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeouts"></a>

```typescript
public readonly timeouts: CloudAssetProjectFeedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference">CloudAssetProjectFeedTimeoutsOutputReference</a>

---

##### `assetNamesInput`<sup>Optional</sup> <a name="assetNamesInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNamesInput"></a>

```typescript
public readonly assetNamesInput: string[];
```

- *Type:* string[]

---

##### `assetTypesInput`<sup>Optional</sup> <a name="assetTypesInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypesInput"></a>

```typescript
public readonly assetTypesInput: string[];
```

- *Type:* string[]

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProjectInput"></a>

```typescript
public readonly billingProjectInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.conditionInput"></a>

```typescript
public readonly conditionInput: CloudAssetProjectFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `feedIdInput`<sup>Optional</sup> <a name="feedIdInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedIdInput"></a>

```typescript
public readonly feedIdInput: string;
```

- *Type:* string

---

##### `feedOutputConfigInput`<sup>Optional</sup> <a name="feedOutputConfigInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfigInput"></a>

```typescript
public readonly feedOutputConfigInput: CloudAssetProjectFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudAssetProjectFeedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

---

##### `assetNames`<sup>Required</sup> <a name="assetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNames"></a>

```typescript
public readonly assetNames: string[];
```

- *Type:* string[]

---

##### `assetTypes`<sup>Required</sup> <a name="assetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypes"></a>

```typescript
public readonly assetTypes: string[];
```

- *Type:* string[]

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAssetProjectFeedCondition <a name="CloudAssetProjectFeedCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

const cloudAssetProjectFeedCondition: cloudAssetProjectFeed.CloudAssetProjectFeedCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#expression CloudAssetProjectFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#description CloudAssetProjectFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#location CloudAssetProjectFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#title CloudAssetProjectFeed#title}

---

### CloudAssetProjectFeedConfig <a name="CloudAssetProjectFeedConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

const cloudAssetProjectFeedConfig: cloudAssetProjectFeed.CloudAssetProjectFeedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedId">feedId</a></code> | <code>string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetNames">assetNames</a></code> | <code>string[]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetTypes">assetTypes</a></code> | <code>string[]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.billingProject">billingProject</a></code> | <code>string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.contentType">contentType</a></code> | <code>string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#id CloudAssetProjectFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#project CloudAssetProjectFeed#project}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#feed_id CloudAssetProjectFeed#feed_id}

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedOutputConfig"></a>

```typescript
public readonly feedOutputConfig: CloudAssetProjectFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#feed_output_config CloudAssetProjectFeed#feed_output_config}

---

##### `assetNames`<sup>Optional</sup> <a name="assetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetNames"></a>

```typescript
public readonly assetNames: string[];
```

- *Type:* string[]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#asset_names CloudAssetProjectFeed#asset_names}

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetTypes"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#asset_types CloudAssetProjectFeed#asset_types}

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing. If not specified, the resource's
project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#billing_project CloudAssetProjectFeed#billing_project}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.condition"></a>

```typescript
public readonly condition: CloudAssetProjectFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#condition CloudAssetProjectFeed#condition}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#content_type CloudAssetProjectFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#id CloudAssetProjectFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#project CloudAssetProjectFeed#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudAssetProjectFeedTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#timeouts CloudAssetProjectFeed#timeouts}

---

### CloudAssetProjectFeedFeedOutputConfig <a name="CloudAssetProjectFeedFeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

const cloudAssetProjectFeedFeedOutputConfig: cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: CloudAssetProjectFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#pubsub_destination CloudAssetProjectFeed#pubsub_destination}

---

### CloudAssetProjectFeedFeedOutputConfigPubsubDestination <a name="CloudAssetProjectFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

const cloudAssetProjectFeedFeedOutputConfigPubsubDestination: cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>string</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#topic CloudAssetProjectFeed#topic}

---

### CloudAssetProjectFeedTimeouts <a name="CloudAssetProjectFeedTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

const cloudAssetProjectFeedTimeouts: cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#create CloudAssetProjectFeed#create}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#delete CloudAssetProjectFeed#delete}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#update CloudAssetProjectFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#create CloudAssetProjectFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#delete CloudAssetProjectFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/cloud_asset_project_feed#update CloudAssetProjectFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAssetProjectFeedConditionOutputReference <a name="CloudAssetProjectFeedConditionOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

new cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAssetProjectFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---


### CloudAssetProjectFeedFeedOutputConfigOutputReference <a name="CloudAssetProjectFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

new cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination">putPubsubDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsubDestination` <a name="putPubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```typescript
public putPubsubDestination(value: CloudAssetProjectFeedFeedOutputConfigPubsubDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsubDestinationInput`<sup>Optional</sup> <a name="pubsubDestinationInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```typescript
public readonly pubsubDestinationInput: CloudAssetProjectFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAssetProjectFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---


### CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference <a name="CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

new cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAssetProjectFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


### CloudAssetProjectFeedTimeoutsOutputReference <a name="CloudAssetProjectFeedTimeoutsOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudAssetProjectFeed } from '@cdktf/provider-google'

new cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudAssetProjectFeedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

---



