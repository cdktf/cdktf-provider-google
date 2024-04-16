# `clouddeployAutomation` Submodule <a name="`clouddeployAutomation` Submodule" id="@cdktf/provider-google.clouddeployAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployAutomation <a name="ClouddeployAutomation" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation google_clouddeploy_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomation(scope: Construct, id: string, config: ClouddeployAutomationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig">ClouddeployAutomationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig">ClouddeployAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules"></a>

```typescript
public putRules(value: IResolvable | ClouddeployAutomationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>[]

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector"></a>

```typescript
public putSelector(value: ClouddeployAutomationSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts"></a>

```typescript
public putTimeouts(value: ClouddeployAutomationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetSuspended"></a>

```typescript
public resetSuspended(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

clouddeployAutomation.ClouddeployAutomation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

clouddeployAutomation.ClouddeployAutomation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

clouddeployAutomation.ClouddeployAutomation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

clouddeployAutomation.ClouddeployAutomation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClouddeployAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList">ClouddeployAutomationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference">ClouddeployAutomationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference">ClouddeployAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipelineInput">deliveryPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selectorInput">selectorInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspendedInput">suspendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipeline">deliveryPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rules"></a>

```typescript
public readonly rules: ClouddeployAutomationRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList">ClouddeployAutomationRulesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selector"></a>

```typescript
public readonly selector: ClouddeployAutomationSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference">ClouddeployAutomationSelectorOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployAutomationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference">ClouddeployAutomationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deliveryPipelineInput`<sup>Optional</sup> <a name="deliveryPipelineInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipelineInput"></a>

```typescript
public readonly deliveryPipelineInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | ClouddeployAutomationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>[]

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selectorInput"></a>

```typescript
public readonly selectorInput: ClouddeployAutomationSelector;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspendedInput"></a>

```typescript
public readonly suspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ClouddeployAutomationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipeline"></a>

```typescript
public readonly deliveryPipeline: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployAutomationConfig <a name="ClouddeployAutomationConfig" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

const clouddeployAutomationConfig: clouddeployAutomation.ClouddeployAutomationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.deliveryPipeline">deliveryPipeline</a></code> | <code>string</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.name">name</a></code> | <code>string</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.deliveryPipeline"></a>

```typescript
public readonly deliveryPipeline: string;
```

- *Type:* string

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#delivery_pipeline ClouddeployAutomation#delivery_pipeline}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#location ClouddeployAutomation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#name ClouddeployAutomation#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | ClouddeployAutomationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#rules ClouddeployAutomation#rules}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.selector"></a>

```typescript
public readonly selector: ClouddeployAutomationSelector;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#selector ClouddeployAutomation#selector}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#service_account ClouddeployAutomation#service_account}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#annotations ClouddeployAutomation#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#description ClouddeployAutomation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#labels ClouddeployAutomation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#suspended ClouddeployAutomation#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployAutomationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#timeouts ClouddeployAutomation#timeouts}

---

### ClouddeployAutomationRules <a name="ClouddeployAutomationRules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

const clouddeployAutomationRules: clouddeployAutomation.ClouddeployAutomationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.advanceRolloutRule">advanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | advance_rollout_rule block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.promoteReleaseRule">promoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | promote_release_rule block. |

---

##### `advanceRolloutRule`<sup>Optional</sup> <a name="advanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.advanceRolloutRule"></a>

```typescript
public readonly advanceRolloutRule: ClouddeployAutomationRulesAdvanceRolloutRule;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

advance_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#advance_rollout_rule ClouddeployAutomation#advance_rollout_rule}

---

##### `promoteReleaseRule`<sup>Optional</sup> <a name="promoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.promoteReleaseRule"></a>

```typescript
public readonly promoteReleaseRule: ClouddeployAutomationRulesPromoteReleaseRule;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#promote_release_rule ClouddeployAutomation#promote_release_rule}

---

### ClouddeployAutomationRulesAdvanceRolloutRule <a name="ClouddeployAutomationRulesAdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

const clouddeployAutomationRulesAdvanceRolloutRule: clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.id">id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases">sourcePhases</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.wait">wait</a></code> | <code>string</code> | Optional. How long to wait after a rollout is finished. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourcePhases`<sup>Optional</sup> <a name="sourcePhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases"></a>

```typescript
public readonly sourcePhases: string[];
```

- *Type:* string[]

Optional.

Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#source_phases ClouddeployAutomation#source_phases}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

Optional. How long to wait after a rollout is finished.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationRulesPromoteReleaseRule <a name="ClouddeployAutomationRulesPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

const clouddeployAutomationRulesPromoteReleaseRule: clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.id">id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase">destinationPhase</a></code> | <code>string</code> | Optional. The starting phase of the rollout created by this operation. Default to the first phase. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId">destinationTargetId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.wait">wait</a></code> | <code>string</code> | Optional. How long the release need to be paused until being promoted to the next target. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `destinationPhase`<sup>Optional</sup> <a name="destinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase"></a>

```typescript
public readonly destinationPhase: string;
```

- *Type:* string

Optional. The starting phase of the rollout created by this operation. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

##### `destinationTargetId`<sup>Optional</sup> <a name="destinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId"></a>

```typescript
public readonly destinationTargetId: string;
```

- *Type:* string

Optional.

The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#destination_target_id ClouddeployAutomation#destination_target_id}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

Optional. How long the release need to be paused until being promoted to the next target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationSelector <a name="ClouddeployAutomationSelector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

const clouddeployAutomationSelector: clouddeployAutomation.ClouddeployAutomationSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>[]</code> | targets block. |

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.property.targets"></a>

```typescript
public readonly targets: IResolvable | ClouddeployAutomationSelectorTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#targets ClouddeployAutomation#targets}

---

### ClouddeployAutomationSelectorTargets <a name="ClouddeployAutomationSelectorTargets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

const clouddeployAutomationSelectorTargets: clouddeployAutomation.ClouddeployAutomationSelectorTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.id">id</a></code> | <code>string</code> | ID of the 'Target'. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Target labels. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the 'Target'.

The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Target labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#labels ClouddeployAutomation#labels}

---

### ClouddeployAutomationTimeouts <a name="ClouddeployAutomationTimeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

const clouddeployAutomationTimeouts: clouddeployAutomation.ClouddeployAutomationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#create ClouddeployAutomation#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#delete ClouddeployAutomation#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#update ClouddeployAutomation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#create ClouddeployAutomation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#delete ClouddeployAutomation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/clouddeploy_automation#update ClouddeployAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference <a name="ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases">resetSourcePhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait">resetWait</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourcePhases` <a name="resetSourcePhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases"></a>

```typescript
public resetSourcePhases(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait"></a>

```typescript
public resetWait(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput">sourcePhasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput">waitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases">sourcePhases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait">wait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sourcePhasesInput`<sup>Optional</sup> <a name="sourcePhasesInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput"></a>

```typescript
public readonly sourcePhasesInput: string[];
```

- *Type:* string[]

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput"></a>

```typescript
public readonly waitInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourcePhases`<sup>Required</sup> <a name="sourcePhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases"></a>

```typescript
public readonly sourcePhases: string[];
```

- *Type:* string[]

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployAutomationRulesAdvanceRolloutRule;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---


### ClouddeployAutomationRulesList <a name="ClouddeployAutomationRulesList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get"></a>

```typescript
public get(index: number): ClouddeployAutomationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployAutomationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>[]

---


### ClouddeployAutomationRulesOutputReference <a name="ClouddeployAutomationRulesOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule">putAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule">putPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule">resetAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule">resetPromoteReleaseRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvanceRolloutRule` <a name="putAdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule"></a>

```typescript
public putAdvanceRolloutRule(value: ClouddeployAutomationRulesAdvanceRolloutRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `putPromoteReleaseRule` <a name="putPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule"></a>

```typescript
public putPromoteReleaseRule(value: ClouddeployAutomationRulesPromoteReleaseRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `resetAdvanceRolloutRule` <a name="resetAdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule"></a>

```typescript
public resetAdvanceRolloutRule(): void
```

##### `resetPromoteReleaseRule` <a name="resetPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule"></a>

```typescript
public resetPromoteReleaseRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRule">advanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRule">promoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput">advanceRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput">promoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advanceRolloutRule`<sup>Required</sup> <a name="advanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRule"></a>

```typescript
public readonly advanceRolloutRule: ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a>

---

##### `promoteReleaseRule`<sup>Required</sup> <a name="promoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRule"></a>

```typescript
public readonly promoteReleaseRule: ClouddeployAutomationRulesPromoteReleaseRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a>

---

##### `advanceRolloutRuleInput`<sup>Optional</sup> <a name="advanceRolloutRuleInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput"></a>

```typescript
public readonly advanceRolloutRuleInput: ClouddeployAutomationRulesAdvanceRolloutRule;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `promoteReleaseRuleInput`<sup>Optional</sup> <a name="promoteReleaseRuleInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput"></a>

```typescript
public readonly promoteReleaseRuleInput: ClouddeployAutomationRulesPromoteReleaseRule;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployAutomationRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>

---


### ClouddeployAutomationRulesPromoteReleaseRuleOutputReference <a name="ClouddeployAutomationRulesPromoteReleaseRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase">resetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId">resetDestinationTargetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait">resetWait</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPhase` <a name="resetDestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```typescript
public resetDestinationPhase(): void
```

##### `resetDestinationTargetId` <a name="resetDestinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```typescript
public resetDestinationTargetId(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait"></a>

```typescript
public resetWait(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput">destinationPhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">destinationTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput">waitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase">destinationPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId">destinationTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait">wait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPhaseInput`<sup>Optional</sup> <a name="destinationPhaseInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```typescript
public readonly destinationPhaseInput: string;
```

- *Type:* string

---

##### `destinationTargetIdInput`<sup>Optional</sup> <a name="destinationTargetIdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```typescript
public readonly destinationTargetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput"></a>

```typescript
public readonly waitInput: string;
```

- *Type:* string

---

##### `destinationPhase`<sup>Required</sup> <a name="destinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```typescript
public readonly destinationPhase: string;
```

- *Type:* string

---

##### `destinationTargetId`<sup>Required</sup> <a name="destinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```typescript
public readonly destinationTargetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployAutomationRulesPromoteReleaseRule;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---


### ClouddeployAutomationSelectorOutputReference <a name="ClouddeployAutomationSelectorOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets">putTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | ClouddeployAutomationSelectorTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList">ClouddeployAutomationSelectorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targets"></a>

```typescript
public readonly targets: ClouddeployAutomationSelectorTargetsList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList">ClouddeployAutomationSelectorTargetsList</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | ClouddeployAutomationSelectorTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployAutomationSelector;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---


### ClouddeployAutomationSelectorTargetsList <a name="ClouddeployAutomationSelectorTargetsList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationSelectorTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get"></a>

```typescript
public get(index: number): ClouddeployAutomationSelectorTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployAutomationSelectorTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>[]

---


### ClouddeployAutomationSelectorTargetsOutputReference <a name="ClouddeployAutomationSelectorTargetsOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployAutomationSelectorTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>

---


### ClouddeployAutomationTimeoutsOutputReference <a name="ClouddeployAutomationTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer"></a>

```typescript
import { clouddeployAutomation } from '@cdktf/provider-google'

new clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployAutomationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

---



