# `gkeBackupRestorePlanIamMember` Submodule <a name="`gkeBackupRestorePlanIamMember` Submodule" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestorePlanIamMember <a name="GkeBackupRestorePlanIamMember" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member google_gke_backup_restore_plan_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

new gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember(scope: Construct, id: string, config: GkeBackupRestorePlanIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig">GkeBackupRestorePlanIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig">GkeBackupRestorePlanIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition"></a>

```typescript
public putCondition(value: GkeBackupRestorePlanIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeBackupRestorePlanIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isConstruct"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformElement"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformResource"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.generateConfigForImport"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeBackupRestorePlanIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeBackupRestorePlanIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeBackupRestorePlanIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeBackupRestorePlanIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference">GkeBackupRestorePlanIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.condition"></a>

```typescript
public readonly condition: GkeBackupRestorePlanIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference">GkeBackupRestorePlanIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GkeBackupRestorePlanIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestorePlanIamMemberCondition <a name="GkeBackupRestorePlanIamMemberCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.Initializer"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

const gkeBackupRestorePlanIamMemberCondition: gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#expression GkeBackupRestorePlanIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#title GkeBackupRestorePlanIamMember#title}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#description GkeBackupRestorePlanIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#expression GkeBackupRestorePlanIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#title GkeBackupRestorePlanIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#description GkeBackupRestorePlanIamMember#description}.

---

### GkeBackupRestorePlanIamMemberConfig <a name="GkeBackupRestorePlanIamMemberConfig" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.Initializer"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

const gkeBackupRestorePlanIamMemberConfig: gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#member GkeBackupRestorePlanIamMember#member}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#name GkeBackupRestorePlanIamMember#name}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#role GkeBackupRestorePlanIamMember#role}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#id GkeBackupRestorePlanIamMember#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#location GkeBackupRestorePlanIamMember#location}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#project GkeBackupRestorePlanIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#member GkeBackupRestorePlanIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#name GkeBackupRestorePlanIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#role GkeBackupRestorePlanIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GkeBackupRestorePlanIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#condition GkeBackupRestorePlanIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#id GkeBackupRestorePlanIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#location GkeBackupRestorePlanIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_backup_restore_plan_iam_member#project GkeBackupRestorePlanIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestorePlanIamMemberConditionOutputReference <a name="GkeBackupRestorePlanIamMemberConditionOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { gkeBackupRestorePlanIamMember } from '@cdktf/provider-google'

new gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeBackupRestorePlanIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

---



