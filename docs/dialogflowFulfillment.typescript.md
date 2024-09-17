# `dialogflowFulfillment` Submodule <a name="`dialogflowFulfillment` Submodule" id="@cdktf/provider-google.dialogflowFulfillment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowFulfillment <a name="DialogflowFulfillment" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment google_dialogflow_fulfillment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

new dialogflowFulfillment.DialogflowFulfillment(scope: Construct, id: string, config: DialogflowFulfillmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig">DialogflowFulfillmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig">DialogflowFulfillmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService">putGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService">resetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeatures` <a name="putFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures"></a>

```typescript
public putFeatures(value: IResolvable | DialogflowFulfillmentFeatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>[]

---

##### `putGenericWebService` <a name="putGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService"></a>

```typescript
public putGenericWebService(value: DialogflowFulfillmentGenericWebService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowFulfillmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures"></a>

```typescript
public resetFeatures(): void
```

##### `resetGenericWebService` <a name="resetGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService"></a>

```typescript
public resetGenericWebService(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowFulfillment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

dialogflowFulfillment.DialogflowFulfillment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

dialogflowFulfillment.DialogflowFulfillment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

dialogflowFulfillment.DialogflowFulfillment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowFulfillment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowFulfillment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowFulfillment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowFulfillment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features">features</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput">featuresInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput">genericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features"></a>

```typescript
public readonly features: DialogflowFulfillmentFeaturesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a>

---

##### `genericWebService`<sup>Required</sup> <a name="genericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService"></a>

```typescript
public readonly genericWebService: DialogflowFulfillmentGenericWebServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowFulfillmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput"></a>

```typescript
public readonly featuresInput: IResolvable | DialogflowFulfillmentFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>[]

---

##### `genericWebServiceInput`<sup>Optional</sup> <a name="genericWebServiceInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput"></a>

```typescript
public readonly genericWebServiceInput: DialogflowFulfillmentGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowFulfillmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowFulfillmentConfig <a name="DialogflowFulfillmentConfig" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

const dialogflowFulfillmentConfig: dialogflowFulfillment.DialogflowFulfillmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether fulfillment is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features">features</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>[]</code> | features block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#display_name DialogflowFulfillment#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether fulfillment is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#enabled DialogflowFulfillment#enabled}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features"></a>

```typescript
public readonly features: IResolvable | DialogflowFulfillmentFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>[]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#features DialogflowFulfillment#features}

---

##### `genericWebService`<sup>Optional</sup> <a name="genericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService"></a>

```typescript
public readonly genericWebService: DialogflowFulfillmentGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#generic_web_service DialogflowFulfillment#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowFulfillmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#timeouts DialogflowFulfillment#timeouts}

---

### DialogflowFulfillmentFeatures <a name="DialogflowFulfillmentFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

const dialogflowFulfillmentFeatures: dialogflowFulfillment.DialogflowFulfillmentFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type">type</a></code> | <code>string</code> | The type of the feature that enabled for fulfillment. * SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the feature that enabled for fulfillment. * SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#type DialogflowFulfillment#type}

---

### DialogflowFulfillmentGenericWebService <a name="DialogflowFulfillmentGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

const dialogflowFulfillmentGenericWebService: dialogflowFulfillment.DialogflowFulfillmentGenericWebService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri">uri</a></code> | <code>string</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password">password</a></code> | <code>string</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username">username</a></code> | <code>string</code> | The user name for HTTP Basic authentication. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#uri DialogflowFulfillment#uri}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#password DialogflowFulfillment#password}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#request_headers DialogflowFulfillment#request_headers}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#username DialogflowFulfillment#username}

---

### DialogflowFulfillmentTimeouts <a name="DialogflowFulfillmentTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

const dialogflowFulfillmentTimeouts: dialogflowFulfillment.DialogflowFulfillmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#create DialogflowFulfillment#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#delete DialogflowFulfillment#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#update DialogflowFulfillment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#create DialogflowFulfillment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#delete DialogflowFulfillment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dialogflow_fulfillment#update DialogflowFulfillment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowFulfillmentFeaturesList <a name="DialogflowFulfillmentFeaturesList" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

new dialogflowFulfillment.DialogflowFulfillmentFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get"></a>

```typescript
public get(index: number): DialogflowFulfillmentFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowFulfillmentFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>[]

---


### DialogflowFulfillmentFeaturesOutputReference <a name="DialogflowFulfillmentFeaturesOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

new dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowFulfillmentFeatures;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>

---


### DialogflowFulfillmentGenericWebServiceOutputReference <a name="DialogflowFulfillmentGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

new dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowFulfillmentGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---


### DialogflowFulfillmentTimeoutsOutputReference <a name="DialogflowFulfillmentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowFulfillment } from '@cdktf/provider-google'

new dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowFulfillmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

---



