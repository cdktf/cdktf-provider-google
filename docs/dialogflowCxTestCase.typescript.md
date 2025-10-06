# `dialogflowCxTestCase` Submodule <a name="`dialogflowCxTestCase` Submodule" id="@cdktf/provider-google.dialogflowCxTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxTestCase <a name="DialogflowCxTestCase" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case google_dialogflow_cx_test_case}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCase(scope: Construct, id: string, config: DialogflowCxTestCaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig">DialogflowCxTestCaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig">DialogflowCxTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns">putTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig">putTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestCaseConversationTurns">resetTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestConfig">resetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTestCaseConversationTurns` <a name="putTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns"></a>

```typescript
public putTestCaseConversationTurns(value: IResolvable | DialogflowCxTestCaseTestCaseConversationTurns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>[]

---

##### `putTestConfig` <a name="putTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig"></a>

```typescript
public putTestConfig(value: DialogflowCxTestCaseTestConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxTestCaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTestCaseConversationTurns` <a name="resetTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestCaseConversationTurns"></a>

```typescript
public resetTestCaseConversationTurns(): void
```

##### `resetTestConfig` <a name="resetTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestConfig"></a>

```typescript
public resetTestConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxTestCase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

dialogflowCxTestCase.DialogflowCxTestCase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.generateConfigForImport"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

dialogflowCxTestCase.DialogflowCxTestCase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowCxTestCase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxTestCase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lastTestResult">lastTestResult</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList">DialogflowCxTestCaseLastTestResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList">DialogflowCxTestCaseTestCaseConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference">DialogflowCxTestCaseTestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference">DialogflowCxTestCaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurnsInput">testCaseConversationTurnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfigInput">testConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `lastTestResult`<sup>Required</sup> <a name="lastTestResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lastTestResult"></a>

```typescript
public readonly lastTestResult: DialogflowCxTestCaseLastTestResultList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList">DialogflowCxTestCaseLastTestResultList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `testCaseConversationTurns`<sup>Required</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurns"></a>

```typescript
public readonly testCaseConversationTurns: DialogflowCxTestCaseTestCaseConversationTurnsList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList">DialogflowCxTestCaseTestCaseConversationTurnsList</a>

---

##### `testConfig`<sup>Required</sup> <a name="testConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfig"></a>

```typescript
public readonly testConfig: DialogflowCxTestCaseTestConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference">DialogflowCxTestCaseTestConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxTestCaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference">DialogflowCxTestCaseTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `testCaseConversationTurnsInput`<sup>Optional</sup> <a name="testCaseConversationTurnsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurnsInput"></a>

```typescript
public readonly testCaseConversationTurnsInput: IResolvable | DialogflowCxTestCaseTestCaseConversationTurns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>[]

---

##### `testConfigInput`<sup>Optional</sup> <a name="testConfigInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfigInput"></a>

```typescript
public readonly testConfigInput: DialogflowCxTestCaseTestConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxTestCaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxTestCaseConfig <a name="DialogflowCxTestCaseConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseConfig: dialogflowCxTestCase.DialogflowCxTestCaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.notes">notes</a></code> | <code>string</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>[]</code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#display_name DialogflowCxTestCase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#notes DialogflowCxTestCase#notes}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#parent DialogflowCxTestCase#parent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#tags DialogflowCxTestCase#tags}

---

##### `testCaseConversationTurns`<sup>Optional</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testCaseConversationTurns"></a>

```typescript
public readonly testCaseConversationTurns: IResolvable | DialogflowCxTestCaseTestCaseConversationTurns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>[]

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#test_case_conversation_turns DialogflowCxTestCase#test_case_conversation_turns}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testConfig"></a>

```typescript
public readonly testConfig: DialogflowCxTestCaseTestConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#test_config DialogflowCxTestCase#test_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxTestCaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#timeouts DialogflowCxTestCase#timeouts}

---

### DialogflowCxTestCaseLastTestResult <a name="DialogflowCxTestCaseLastTestResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResult: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurns <a name="DialogflowCxTestCaseLastTestResultConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurns: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsUserInput: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses = { ... }
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent: dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent = { ... }
```


### DialogflowCxTestCaseTestCaseConversationTurns <a name="DialogflowCxTestCaseTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurns: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | user_input block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | virtual_agent_output block. |

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.userInput"></a>

```typescript
public readonly userInput: DialogflowCxTestCaseTestCaseConversationTurnsUserInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

user_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#user_input DialogflowCxTestCase#user_input}

---

##### `virtualAgentOutput`<sup>Optional</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput"></a>

```typescript
public readonly virtualAgentOutput: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

virtual_agent_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#virtual_agent_output DialogflowCxTestCase#virtual_agent_output}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInput <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsUserInput: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether sentiment analysis is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters">injectedParameters</a></code> | <code>string</code> | Parameters that need to be injected into the conversation during intent detection. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input">input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If webhooks should be allowed to trigger in response to the user utterance. |

---

##### `enableSentimentAnalysis`<sup>Optional</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis"></a>

```typescript
public readonly enableSentimentAnalysis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether sentiment analysis is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#enable_sentiment_analysis DialogflowCxTestCase#enable_sentiment_analysis}

---

##### `injectedParameters`<sup>Optional</sup> <a name="injectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters"></a>

```typescript
public readonly injectedParameters: string;
```

- *Type:* string

Parameters that need to be injected into the conversation during intent detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#injected_parameters DialogflowCxTestCase#injected_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input"></a>

```typescript
public readonly input: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#input DialogflowCxTestCase#input}

---

##### `isWebhookEnabled`<sup>Optional</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled"></a>

```typescript
public readonly isWebhookEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If webhooks should be allowed to trigger in response to the user utterance.

Often if parameters are injected, webhooks should not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#is_webhook_enabled DialogflowCxTestCase#is_webhook_enabled}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsUserInputInput: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | dtmf block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event">event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | event block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode">languageCode</a></code> | <code>string</code> | The language of the input. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | text block. |

---

##### `dtmf`<sup>Optional</sup> <a name="dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf"></a>

```typescript
public readonly dtmf: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

dtmf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#dtmf DialogflowCxTestCase#dtmf}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event"></a>

```typescript
public readonly event: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language of the input.

See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#language_code DialogflowCxTestCase#language_code}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text"></a>

```typescript
public readonly text: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits">digits</a></code> | <code>string</code> | The dtmf digits. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit">finishDigit</a></code> | <code>string</code> | The finish digit (if any). |

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits"></a>

```typescript
public readonly digits: string;
```

- *Type:* string

The dtmf digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#digits DialogflowCxTestCase#digits}

---

##### `finishDigit`<sup>Optional</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

The finish digit (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#finish_digit DialogflowCxTestCase#finish_digit}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event">event</a></code> | <code>string</code> | Name of the event. |

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

Name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text">text</a></code> | <code>string</code> | The natural language text to be processed. Text length must not exceed 256 characters. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The natural language text to be processed. Text length must not exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | current_page block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters">sessionParameters</a></code> | <code>string</code> | The session parameters available to the bot at this point. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses">textResponses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>[]</code> | text_responses block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | triggered_intent block. |

---

##### `currentPage`<sup>Optional</sup> <a name="currentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage"></a>

```typescript
public readonly currentPage: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

current_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#current_page DialogflowCxTestCase#current_page}

---

##### `sessionParameters`<sup>Optional</sup> <a name="sessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters"></a>

```typescript
public readonly sessionParameters: string;
```

- *Type:* string

The session parameters available to the bot at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#session_parameters DialogflowCxTestCase#session_parameters}

---

##### `textResponses`<sup>Optional</sup> <a name="textResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses"></a>

```typescript
public readonly textResponses: IResolvable | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>[]

text_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#text_responses DialogflowCxTestCase#text_responses}

---

##### `triggeredIntent`<sup>Optional</sup> <a name="triggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent"></a>

```typescript
public readonly triggeredIntent: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

triggered_intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#triggered_intent DialogflowCxTestCase#triggered_intent}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name">name</a></code> | <code>string</code> | The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text">text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent: dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name">name</a></code> | <code>string</code> | The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}

---

### DialogflowCxTestCaseTestConfig <a name="DialogflowCxTestCaseTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTestConfig: dialogflowCxTestCase.DialogflowCxTestCaseTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.flow">flow</a></code> | <code>string</code> | Flow name to start the test case with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.page">page</a></code> | <code>string</code> | The page to start the test case with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.trackingParameters">trackingParameters</a></code> | <code>string[]</code> | Session parameters to be compared when calculating differences. |

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.flow"></a>

```typescript
public readonly flow: string;
```

- *Type:* string

Flow name to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#flow DialogflowCxTestCase#flow}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

The page to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#page DialogflowCxTestCase#page}

---

##### `trackingParameters`<sup>Optional</sup> <a name="trackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.trackingParameters"></a>

```typescript
public readonly trackingParameters: string[];
```

- *Type:* string[]

Session parameters to be compared when calculating differences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#tracking_parameters DialogflowCxTestCase#tracking_parameters}

---

### DialogflowCxTestCaseTimeouts <a name="DialogflowCxTestCaseTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

const dialogflowCxTestCaseTimeouts: dialogflowCxTestCase.DialogflowCxTestCaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#create DialogflowCxTestCase#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#delete DialogflowCxTestCase#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#update DialogflowCxTestCase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#create DialogflowCxTestCase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#delete DialogflowCxTestCase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_test_case#update DialogflowCxTestCase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxTestCaseLastTestResultConversationTurnsList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns">DialogflowCxTestCaseLastTestResultConversationTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userInput`<sup>Required</sup> <a name="userInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput"></a>

```typescript
public readonly userInput: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a>

---

##### `virtualAgentOutput`<sup>Required</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```typescript
public readonly virtualAgentOutput: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurns;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns">DialogflowCxTestCaseLastTestResultConversationTurns</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```typescript
public readonly digits: string;
```

- *Type:* string

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```typescript
public readonly dtmf: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event"></a>

```typescript
public readonly event: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters">injectedParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableSentimentAnalysis`<sup>Required</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```typescript
public readonly enableSentimentAnalysis: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `injectedParameters`<sup>Required</sup> <a name="injectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```typescript
public readonly injectedParameters: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input"></a>

```typescript
public readonly input: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a>

---

##### `isWebhookEnabled`<sup>Required</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```typescript
public readonly isWebhookEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsUserInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences">differences</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">sessionParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">textResponses</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentPage`<sup>Required</sup> <a name="currentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```typescript
public readonly currentPage: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a>

---

##### `differences`<sup>Required</sup> <a name="differences" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences"></a>

```typescript
public readonly differences: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a>

---

##### `sessionParameters`<sup>Required</sup> <a name="sessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```typescript
public readonly sessionParameters: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status"></a>

```typescript
public readonly status: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a>

---

##### `textResponses`<sup>Required</sup> <a name="textResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```typescript
public readonly textResponses: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggeredIntent`<sup>Required</sup> <a name="triggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```typescript
public readonly triggeredIntent: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### DialogflowCxTestCaseLastTestResultList <a name="DialogflowCxTestCaseLastTestResultList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseLastTestResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultOutputReference <a name="DialogflowCxTestCaseLastTestResultOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns">conversationTurns</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList">DialogflowCxTestCaseLastTestResultConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testResult">testResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testTime">testTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult">DialogflowCxTestCaseLastTestResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationTurns`<sup>Required</sup> <a name="conversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns"></a>

```typescript
public readonly conversationTurns: DialogflowCxTestCaseLastTestResultConversationTurnsList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList">DialogflowCxTestCaseLastTestResultConversationTurnsList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `testResult`<sup>Required</sup> <a name="testResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testResult"></a>

```typescript
public readonly testResult: string;
```

- *Type:* string

---

##### `testTime`<sup>Required</sup> <a name="testTime" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testTime"></a>

```typescript
public readonly testTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseLastTestResult;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult">DialogflowCxTestCaseLastTestResult</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsList <a name="DialogflowCxTestCaseTestCaseConversationTurnsList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseTestCaseConversationTurnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxTestCaseTestCaseConversationTurns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>[]

---


### DialogflowCxTestCaseTestCaseConversationTurnsOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput">putUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput">putVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput">resetUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput">resetVirtualAgentOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserInput` <a name="putUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput"></a>

```typescript
public putUserInput(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `putVirtualAgentOutput` <a name="putVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput"></a>

```typescript
public putVirtualAgentOutput(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `resetUserInput` <a name="resetUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput"></a>

```typescript
public resetUserInput(): void
```

##### `resetVirtualAgentOutput` <a name="resetVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput"></a>

```typescript
public resetVirtualAgentOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput">userInputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput">virtualAgentOutputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userInput`<sup>Required</sup> <a name="userInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput"></a>

```typescript
public readonly userInput: DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a>

---

##### `virtualAgentOutput`<sup>Required</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```typescript
public readonly virtualAgentOutput: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a>

---

##### `userInputInput`<sup>Optional</sup> <a name="userInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput"></a>

```typescript
public readonly userInputInput: DialogflowCxTestCaseTestCaseConversationTurnsUserInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `virtualAgentOutputInput`<sup>Optional</sup> <a name="virtualAgentOutputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput"></a>

```typescript
public readonly virtualAgentOutputInput: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxTestCaseTestCaseConversationTurns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits">resetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit">resetFinishDigit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDigits` <a name="resetDigits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits"></a>

```typescript
public resetDigits(): void
```

##### `resetFinishDigit` <a name="resetFinishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit"></a>

```typescript
public resetFinishDigit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput">digitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput">finishDigitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digitsInput`<sup>Optional</sup> <a name="digitsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput"></a>

```typescript
public readonly digitsInput: string;
```

- *Type:* string

---

##### `finishDigitInput`<sup>Optional</sup> <a name="finishDigitInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput"></a>

```typescript
public readonly finishDigitInput: string;
```

- *Type:* string

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```typescript
public readonly digits: string;
```

- *Type:* string

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf">putDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent">putEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf">resetDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDtmf` <a name="putDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf"></a>

```typescript
public putDtmf(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `putEvent` <a name="putEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent"></a>

```typescript
public putEvent(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `resetDtmf` <a name="resetDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf"></a>

```typescript
public resetDtmf(): void
```

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput">dtmfInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput">eventInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```typescript
public readonly dtmf: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event"></a>

```typescript
public readonly event: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a>

---

##### `dtmfInput`<sup>Optional</sup> <a name="dtmfInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput"></a>

```typescript
public readonly dtmfInput: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis">resetEnableSentimentAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters">resetInjectedParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled">resetIsWebhookEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput"></a>

```typescript
public putInput(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `resetEnableSentimentAnalysis` <a name="resetEnableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis"></a>

```typescript
public resetEnableSentimentAnalysis(): void
```

##### `resetInjectedParameters` <a name="resetInjectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters"></a>

```typescript
public resetInjectedParameters(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetIsWebhookEnabled` <a name="resetIsWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled"></a>

```typescript
public resetIsWebhookEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput">enableSentimentAnalysisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput">injectedParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput">inputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput">isWebhookEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters">injectedParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input"></a>

```typescript
public readonly input: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a>

---

##### `enableSentimentAnalysisInput`<sup>Optional</sup> <a name="enableSentimentAnalysisInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput"></a>

```typescript
public readonly enableSentimentAnalysisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `injectedParametersInput`<sup>Optional</sup> <a name="injectedParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput"></a>

```typescript
public readonly injectedParametersInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `isWebhookEnabledInput`<sup>Optional</sup> <a name="isWebhookEnabledInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput"></a>

```typescript
public readonly isWebhookEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSentimentAnalysis`<sup>Required</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```typescript
public readonly enableSentimentAnalysis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `injectedParameters`<sup>Required</sup> <a name="injectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```typescript
public readonly injectedParameters: string;
```

- *Type:* string

---

##### `isWebhookEnabled`<sup>Required</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```typescript
public readonly isWebhookEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsUserInput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage">putCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses">putTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent">putTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage">resetCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters">resetSessionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses">resetTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent">resetTriggeredIntent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurrentPage` <a name="putCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage"></a>

```typescript
public putCurrentPage(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `putTextResponses` <a name="putTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses"></a>

```typescript
public putTextResponses(value: IResolvable | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>[]

---

##### `putTriggeredIntent` <a name="putTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent"></a>

```typescript
public putTriggeredIntent(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `resetCurrentPage` <a name="resetCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage"></a>

```typescript
public resetCurrentPage(): void
```

##### `resetSessionParameters` <a name="resetSessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters"></a>

```typescript
public resetSessionParameters(): void
```

##### `resetTextResponses` <a name="resetTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses"></a>

```typescript
public resetTextResponses(): void
```

##### `resetTriggeredIntent` <a name="resetTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent"></a>

```typescript
public resetTriggeredIntent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">textResponses</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput">currentPageInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput">sessionParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput">textResponsesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput">triggeredIntentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">sessionParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentPage`<sup>Required</sup> <a name="currentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```typescript
public readonly currentPage: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a>

---

##### `textResponses`<sup>Required</sup> <a name="textResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```typescript
public readonly textResponses: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggeredIntent`<sup>Required</sup> <a name="triggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```typescript
public readonly triggeredIntent: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a>

---

##### `currentPageInput`<sup>Optional</sup> <a name="currentPageInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput"></a>

```typescript
public readonly currentPageInput: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `sessionParametersInput`<sup>Optional</sup> <a name="sessionParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput"></a>

```typescript
public readonly sessionParametersInput: string;
```

- *Type:* string

---

##### `textResponsesInput`<sup>Optional</sup> <a name="textResponsesInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput"></a>

```typescript
public readonly textResponsesInput: IResolvable | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>[]

---

##### `triggeredIntentInput`<sup>Optional</sup> <a name="triggeredIntentInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput"></a>

```typescript
public readonly triggeredIntentInput: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `sessionParameters`<sup>Required</sup> <a name="sessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```typescript
public readonly sessionParameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```typescript
public get(index: number): DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>[]

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput">textInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string[];
```

- *Type:* string[]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### DialogflowCxTestCaseTestConfigOutputReference <a name="DialogflowCxTestCaseTestConfigOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetFlow">resetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters">resetTrackingParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlow` <a name="resetFlow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetFlow"></a>

```typescript
public resetFlow(): void
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetPage"></a>

```typescript
public resetPage(): void
```

##### `resetTrackingParameters` <a name="resetTrackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters"></a>

```typescript
public resetTrackingParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flowInput">flowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.pageInput">pageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput">trackingParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flow">flow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.page">page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters">trackingParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowInput`<sup>Optional</sup> <a name="flowInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flowInput"></a>

```typescript
public readonly flowInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.pageInput"></a>

```typescript
public readonly pageInput: string;
```

- *Type:* string

---

##### `trackingParametersInput`<sup>Optional</sup> <a name="trackingParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput"></a>

```typescript
public readonly trackingParametersInput: string[];
```

- *Type:* string[]

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flow"></a>

```typescript
public readonly flow: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

---

##### `trackingParameters`<sup>Required</sup> <a name="trackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters"></a>

```typescript
public readonly trackingParameters: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxTestCaseTestConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---


### DialogflowCxTestCaseTimeoutsOutputReference <a name="DialogflowCxTestCaseTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxTestCase } from '@cdktf/provider-google'

new dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxTestCaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

---



