# `workbenchInstance` Submodule <a name="`workbenchInstance` Submodule" id="@cdktf/provider-google.workbenchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkbenchInstance <a name="WorkbenchInstance" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance google_workbench_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstance(scope: Construct, id: string, config: WorkbenchInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig">WorkbenchInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig">WorkbenchInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup">putGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDisableProxyAccess">resetDisableProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetGceSetup">resetGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceOwners">resetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGceSetup` <a name="putGceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup"></a>

```typescript
public putGceSetup(value: WorkbenchInstanceGceSetup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: WorkbenchInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

---

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetDisableProxyAccess` <a name="resetDisableProxyAccess" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDisableProxyAccess"></a>

```typescript
public resetDisableProxyAccess(): void
```

##### `resetGceSetup` <a name="resetGceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetGceSetup"></a>

```typescript
public resetGceSetup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetInstanceOwners` <a name="resetInstanceOwners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceOwners"></a>

```typescript
public resetInstanceOwners(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkbenchInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

workbenchInstance.WorkbenchInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

workbenchInstance.WorkbenchInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

workbenchInstance.WorkbenchInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

workbenchInstance.WorkbenchInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkbenchInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkbenchInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkbenchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkbenchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetup">gceSetup</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference">WorkbenchInstanceGceSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthInfo">healthInfo</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList">WorkbenchInstanceHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthState">healthState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.proxyUri">proxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference">WorkbenchInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.upgradeHistory">upgradeHistory</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList">WorkbenchInstanceUpgradeHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccessInput">disableProxyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetupInput">gceSetupInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwnersInput">instanceOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccess">disableProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gceSetup`<sup>Required</sup> <a name="gceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetup"></a>

```typescript
public readonly gceSetup: WorkbenchInstanceGceSetupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference">WorkbenchInstanceGceSetupOutputReference</a>

---

##### `healthInfo`<sup>Required</sup> <a name="healthInfo" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthInfo"></a>

```typescript
public readonly healthInfo: WorkbenchInstanceHealthInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList">WorkbenchInstanceHealthInfoList</a>

---

##### `healthState`<sup>Required</sup> <a name="healthState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthState"></a>

```typescript
public readonly healthState: string;
```

- *Type:* string

---

##### `proxyUri`<sup>Required</sup> <a name="proxyUri" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.proxyUri"></a>

```typescript
public readonly proxyUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeouts"></a>

```typescript
public readonly timeouts: WorkbenchInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference">WorkbenchInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `upgradeHistory`<sup>Required</sup> <a name="upgradeHistory" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.upgradeHistory"></a>

```typescript
public readonly upgradeHistory: WorkbenchInstanceUpgradeHistoryList;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList">WorkbenchInstanceUpgradeHistoryList</a>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `disableProxyAccessInput`<sup>Optional</sup> <a name="disableProxyAccessInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccessInput"></a>

```typescript
public readonly disableProxyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gceSetupInput`<sup>Optional</sup> <a name="gceSetupInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetupInput"></a>

```typescript
public readonly gceSetupInput: WorkbenchInstanceGceSetup;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `instanceOwnersInput`<sup>Optional</sup> <a name="instanceOwnersInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwnersInput"></a>

```typescript
public readonly instanceOwnersInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WorkbenchInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `disableProxyAccess`<sup>Required</sup> <a name="disableProxyAccess" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccess"></a>

```typescript
public readonly disableProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceOwners`<sup>Required</sup> <a name="instanceOwners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkbenchInstanceConfig <a name="WorkbenchInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceConfig: workbenchInstance.WorkbenchInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.location">location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.disableProxyAccess">disableProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.gceSetup">gceSetup</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#id WorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | 'Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#project WorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#location WorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#desired_state WorkbenchInstance#desired_state}

---

##### `disableProxyAccess`<sup>Optional</sup> <a name="disableProxyAccess" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.disableProxyAccess"></a>

```typescript
public readonly disableProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disable_proxy_access WorkbenchInstance#disable_proxy_access}

---

##### `gceSetup`<sup>Optional</sup> <a name="gceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.gceSetup"></a>

```typescript
public readonly gceSetup: WorkbenchInstanceGceSetup;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#gce_setup WorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#id WorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#instance_id WorkbenchInstance#instance_id}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#instance_owners WorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#labels WorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#project WorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WorkbenchInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#timeouts WorkbenchInstance#timeouts}

---

### WorkbenchInstanceGceSetup <a name="WorkbenchInstanceGceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetup: workbenchInstance.WorkbenchInstanceGceSetup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.acceleratorConfigs">acceleratorConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>[]</code> | accelerator_configs block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | data_disks block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.disablePublicIp">disablePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. If true, no external IP will be assigned to this VM instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.enableIpForwarding">enableIpForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.machineType">machineType</a></code> | <code>string</code> | Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Optional. Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>[]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.serviceAccounts">serviceAccounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>[]</code> | service_accounts block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.tags">tags</a></code> | <code>string[]</code> | Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | vm_image block. |

---

##### `acceleratorConfigs`<sup>Optional</sup> <a name="acceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.acceleratorConfigs"></a>

```typescript
public readonly acceleratorConfigs: IResolvable | WorkbenchInstanceGceSetupAcceleratorConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#accelerator_configs WorkbenchInstance#accelerator_configs}

---

##### `bootDisk`<sup>Optional</sup> <a name="bootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.bootDisk"></a>

```typescript
public readonly bootDisk: WorkbenchInstanceGceSetupBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#boot_disk WorkbenchInstance#boot_disk}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.containerImage"></a>

```typescript
public readonly containerImage: WorkbenchInstanceGceSetupContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#container_image WorkbenchInstance#container_image}

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.dataDisks"></a>

```typescript
public readonly dataDisks: WorkbenchInstanceGceSetupDataDisks;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#data_disks WorkbenchInstance#data_disks}

---

##### `disablePublicIp`<sup>Optional</sup> <a name="disablePublicIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.disablePublicIp"></a>

```typescript
public readonly disablePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disable_public_ip WorkbenchInstance#disable_public_ip}

---

##### `enableIpForwarding`<sup>Optional</sup> <a name="enableIpForwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.enableIpForwarding"></a>

```typescript
public readonly enableIpForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#enable_ip_forwarding WorkbenchInstance#enable_ip_forwarding}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#machine_type WorkbenchInstance#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#metadata WorkbenchInstance#metadata}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | WorkbenchInstanceGceSetupNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>[]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#network_interfaces WorkbenchInstance#network_interfaces}

---

##### `serviceAccounts`<sup>Optional</sup> <a name="serviceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: IResolvable | WorkbenchInstanceGceSetupServiceAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>[]

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#service_accounts WorkbenchInstance#service_accounts}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: WorkbenchInstanceGceSetupShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#shielded_instance_config WorkbenchInstance#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#tags WorkbenchInstance#tags}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.vmImage"></a>

```typescript
public readonly vmImage: WorkbenchInstanceGceSetupVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#vm_image WorkbenchInstance#vm_image}

---

### WorkbenchInstanceGceSetupAcceleratorConfigs <a name="WorkbenchInstanceGceSetupAcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupAcceleratorConfigs: workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount">coreCount</a></code> | <code>string</code> | Optional. Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.type">type</a></code> | <code>string</code> | Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"]. |

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount"></a>

```typescript
public readonly coreCount: string;
```

- *Type:* string

Optional. Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#core_count WorkbenchInstance#core_count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#type WorkbenchInstance#type}

---

### WorkbenchInstanceGceSetupBootDisk <a name="WorkbenchInstanceGceSetupBootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupBootDisk: workbenchInstance.WorkbenchInstanceGceSetupBootDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskType">diskType</a></code> | <code>string</code> | Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.kmsKey">kmsKey</a></code> | <code>string</code> | 'Optional. |

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

### WorkbenchInstanceGceSetupContainerImage <a name="WorkbenchInstanceGceSetupContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupContainerImage: workbenchInstance.WorkbenchInstanceGceSetupContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.repository">repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.tag">tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#repository WorkbenchInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#tag WorkbenchInstance#tag}

---

### WorkbenchInstanceGceSetupDataDisks <a name="WorkbenchInstanceGceSetupDataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupDataDisks: workbenchInstance.WorkbenchInstanceGceSetupDataDisks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskType">diskType</a></code> | <code>string</code> | Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.kmsKey">kmsKey</a></code> | <code>string</code> | 'Optional. |

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

### WorkbenchInstanceGceSetupNetworkInterfaces <a name="WorkbenchInstanceGceSetupNetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupNetworkInterfaces: workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.network">network</a></code> | <code>string</code> | Optional. The name of the VPC that this VM instance is in. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.nicType">nicType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.subnet">subnet</a></code> | <code>string</code> | Optional. The name of the subnet that this VM instance is in. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Optional. The name of the VPC that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#network WorkbenchInstance#network}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

Optional.

The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet. Possible values: ["VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#nic_type WorkbenchInstance#nic_type}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

Optional. The name of the subnet that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#subnet WorkbenchInstance#subnet}

---

### WorkbenchInstanceGceSetupServiceAccounts <a name="WorkbenchInstanceGceSetupServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupServiceAccounts: workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.property.email">email</a></code> | <code>string</code> | Optional. Email address of the service account. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Optional. Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#email WorkbenchInstance#email}

---

### WorkbenchInstanceGceSetupShieldedInstanceConfig <a name="WorkbenchInstanceGceSetupShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupShieldedInstanceConfig: workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#enable_integrity_monitoring WorkbenchInstance#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#enable_secure_boot WorkbenchInstance#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#enable_vtpm WorkbenchInstance#enable_vtpm}

---

### WorkbenchInstanceGceSetupVmImage <a name="WorkbenchInstanceGceSetupVmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceGceSetupVmImage: workbenchInstance.WorkbenchInstanceGceSetupVmImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.family">family</a></code> | <code>string</code> | Optional. Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.name">name</a></code> | <code>string</code> | Optional. Use VM image name to find the image. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.project">project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#family WorkbenchInstance#family}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#project WorkbenchInstance#project}

---

### WorkbenchInstanceHealthInfo <a name="WorkbenchInstanceHealthInfo" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceHealthInfo: workbenchInstance.WorkbenchInstanceHealthInfo = { ... }
```


### WorkbenchInstanceTimeouts <a name="WorkbenchInstanceTimeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceTimeouts: workbenchInstance.WorkbenchInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#create WorkbenchInstance#create}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#delete WorkbenchInstance#delete}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#update WorkbenchInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#create WorkbenchInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#delete WorkbenchInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/workbench_instance#update WorkbenchInstance#update}.

---

### WorkbenchInstanceUpgradeHistory <a name="WorkbenchInstanceUpgradeHistory" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

const workbenchInstanceUpgradeHistory: workbenchInstance.WorkbenchInstanceUpgradeHistory = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### WorkbenchInstanceGceSetupAcceleratorConfigsList <a name="WorkbenchInstanceGceSetupAcceleratorConfigsList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get"></a>

```typescript
public get(index: number): WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkbenchInstanceGceSetupAcceleratorConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

---


### WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference <a name="WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount"></a>

```typescript
public resetCoreCount(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount">coreCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkbenchInstanceGceSetupAcceleratorConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>

---


### WorkbenchInstanceGceSetupBootDiskOutputReference <a name="WorkbenchInstanceGceSetupBootDiskOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceGceSetupBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---


### WorkbenchInstanceGceSetupContainerImageOutputReference <a name="WorkbenchInstanceGceSetupContainerImageOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceGceSetupContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---


### WorkbenchInstanceGceSetupDataDisksOutputReference <a name="WorkbenchInstanceGceSetupDataDisksOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceGceSetupDataDisks;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---


### WorkbenchInstanceGceSetupNetworkInterfacesList <a name="WorkbenchInstanceGceSetupNetworkInterfacesList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get"></a>

```typescript
public get(index: number): WorkbenchInstanceGceSetupNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkbenchInstanceGceSetupNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>[]

---


### WorkbenchInstanceGceSetupNetworkInterfacesOutputReference <a name="WorkbenchInstanceGceSetupNetworkInterfacesOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet">resetSubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType"></a>

```typescript
public resetNicType(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet"></a>

```typescript
public resetSubnet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType">nicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput"></a>

```typescript
public readonly nicTypeInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkbenchInstanceGceSetupNetworkInterfaces;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>

---


### WorkbenchInstanceGceSetupOutputReference <a name="WorkbenchInstanceGceSetupOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs">putAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk">putBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts">putServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage">putVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs">resetAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetBootDisk">resetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp">resetDisablePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding">resetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetServiceAccounts">resetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetVmImage">resetVmImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorConfigs` <a name="putAcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs"></a>

```typescript
public putAcceleratorConfigs(value: IResolvable | WorkbenchInstanceGceSetupAcceleratorConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

---

##### `putBootDisk` <a name="putBootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk"></a>

```typescript
public putBootDisk(value: WorkbenchInstanceGceSetupBootDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage"></a>

```typescript
public putContainerImage(value: WorkbenchInstanceGceSetupContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks"></a>

```typescript
public putDataDisks(value: WorkbenchInstanceGceSetupDataDisks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | WorkbenchInstanceGceSetupNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>[]

---

##### `putServiceAccounts` <a name="putServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts"></a>

```typescript
public putServiceAccounts(value: IResolvable | WorkbenchInstanceGceSetupServiceAccounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>[]

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: WorkbenchInstanceGceSetupShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `putVmImage` <a name="putVmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage"></a>

```typescript
public putVmImage(value: WorkbenchInstanceGceSetupVmImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---

##### `resetAcceleratorConfigs` <a name="resetAcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs"></a>

```typescript
public resetAcceleratorConfigs(): void
```

##### `resetBootDisk` <a name="resetBootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetBootDisk"></a>

```typescript
public resetBootDisk(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDataDisks"></a>

```typescript
public resetDataDisks(): void
```

##### `resetDisablePublicIp` <a name="resetDisablePublicIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp"></a>

```typescript
public resetDisablePublicIp(): void
```

##### `resetEnableIpForwarding` <a name="resetEnableIpForwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding"></a>

```typescript
public resetEnableIpForwarding(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```

##### `resetServiceAccounts` <a name="resetServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetServiceAccounts"></a>

```typescript
public resetServiceAccounts(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVmImage` <a name="resetVmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetVmImage"></a>

```typescript
public resetVmImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs">acceleratorConfigs</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList">WorkbenchInstanceGceSetupAcceleratorConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference">WorkbenchInstanceGceSetupBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference">WorkbenchInstanceGceSetupContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference">WorkbenchInstanceGceSetupDataDisksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList">WorkbenchInstanceGceSetupNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccounts">serviceAccounts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList">WorkbenchInstanceGceSetupServiceAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference">WorkbenchInstanceGceSetupVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput">acceleratorConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDiskInput">bootDiskInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisksInput">dataDisksInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput">disablePublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput">enableIpForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput">serviceAccountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIp">disablePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding">enableIpForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorConfigs`<sup>Required</sup> <a name="acceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs"></a>

```typescript
public readonly acceleratorConfigs: WorkbenchInstanceGceSetupAcceleratorConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList">WorkbenchInstanceGceSetupAcceleratorConfigsList</a>

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDisk"></a>

```typescript
public readonly bootDisk: WorkbenchInstanceGceSetupBootDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference">WorkbenchInstanceGceSetupBootDiskOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: WorkbenchInstanceGceSetupContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference">WorkbenchInstanceGceSetupContainerImageOutputReference</a>

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisks"></a>

```typescript
public readonly dataDisks: WorkbenchInstanceGceSetupDataDisksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference">WorkbenchInstanceGceSetupDataDisksOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: WorkbenchInstanceGceSetupNetworkInterfacesList;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList">WorkbenchInstanceGceSetupNetworkInterfacesList</a>

---

##### `serviceAccounts`<sup>Required</sup> <a name="serviceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: WorkbenchInstanceGceSetupServiceAccountsList;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList">WorkbenchInstanceGceSetupServiceAccountsList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a>

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImage"></a>

```typescript
public readonly vmImage: WorkbenchInstanceGceSetupVmImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference">WorkbenchInstanceGceSetupVmImageOutputReference</a>

---

##### `acceleratorConfigsInput`<sup>Optional</sup> <a name="acceleratorConfigsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput"></a>

```typescript
public readonly acceleratorConfigsInput: IResolvable | WorkbenchInstanceGceSetupAcceleratorConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

---

##### `bootDiskInput`<sup>Optional</sup> <a name="bootDiskInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDiskInput"></a>

```typescript
public readonly bootDiskInput: WorkbenchInstanceGceSetupBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: WorkbenchInstanceGceSetupContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisksInput"></a>

```typescript
public readonly dataDisksInput: WorkbenchInstanceGceSetupDataDisks;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---

##### `disablePublicIpInput`<sup>Optional</sup> <a name="disablePublicIpInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput"></a>

```typescript
public readonly disablePublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpForwardingInput`<sup>Optional</sup> <a name="enableIpForwardingInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput"></a>

```typescript
public readonly enableIpForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | WorkbenchInstanceGceSetupNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>[]

---

##### `serviceAccountsInput`<sup>Optional</sup> <a name="serviceAccountsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput"></a>

```typescript
public readonly serviceAccountsInput: IResolvable | WorkbenchInstanceGceSetupServiceAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>[]

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: WorkbenchInstanceGceSetupShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImageInput"></a>

```typescript
public readonly vmImageInput: WorkbenchInstanceGceSetupVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---

##### `disablePublicIp`<sup>Required</sup> <a name="disablePublicIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIp"></a>

```typescript
public readonly disablePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpForwarding`<sup>Required</sup> <a name="enableIpForwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding"></a>

```typescript
public readonly enableIpForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceGceSetup;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---


### WorkbenchInstanceGceSetupServiceAccountsList <a name="WorkbenchInstanceGceSetupServiceAccountsList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get"></a>

```typescript
public get(index: number): WorkbenchInstanceGceSetupServiceAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkbenchInstanceGceSetupServiceAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>[]

---


### WorkbenchInstanceGceSetupServiceAccountsOutputReference <a name="WorkbenchInstanceGceSetupServiceAccountsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkbenchInstanceGceSetupServiceAccounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>

---


### WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference <a name="WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceGceSetupShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---


### WorkbenchInstanceGceSetupVmImageOutputReference <a name="WorkbenchInstanceGceSetupVmImageOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetFamily"></a>

```typescript
public resetFamily(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceGceSetupVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---


### WorkbenchInstanceHealthInfoList <a name="WorkbenchInstanceHealthInfoList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceHealthInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get"></a>

```typescript
public get(index: number): WorkbenchInstanceHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WorkbenchInstanceHealthInfoOutputReference <a name="WorkbenchInstanceHealthInfoOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceHealthInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo">WorkbenchInstanceHealthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceHealthInfo;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo">WorkbenchInstanceHealthInfo</a>

---


### WorkbenchInstanceTimeoutsOutputReference <a name="WorkbenchInstanceTimeoutsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkbenchInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

---


### WorkbenchInstanceUpgradeHistoryList <a name="WorkbenchInstanceUpgradeHistoryList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceUpgradeHistoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get"></a>

```typescript
public get(index: number): WorkbenchInstanceUpgradeHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WorkbenchInstanceUpgradeHistoryOutputReference <a name="WorkbenchInstanceUpgradeHistoryOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer"></a>

```typescript
import { workbenchInstance } from '@cdktf/provider-google'

new workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage">containerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot">snapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage">vmImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory">WorkbenchInstanceUpgradeHistory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot"></a>

```typescript
public readonly snapshot: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage"></a>

```typescript
public readonly vmImage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkbenchInstanceUpgradeHistory;
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory">WorkbenchInstanceUpgradeHistory</a>

---



