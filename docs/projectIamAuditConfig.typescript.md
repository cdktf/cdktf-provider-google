# `google_project_iam_audit_config`

Refer to the Terraform Registory for docs: [`google_project_iam_audit_config`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config).

# `projectIamAuditConfig` Submodule <a name="`projectIamAuditConfig` Submodule" id="@cdktf/provider-google.projectIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIamAuditConfig <a name="ProjectIamAuditConfig" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config google_project_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.Initializer"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

new projectIamAuditConfig.ProjectIamAuditConfig(scope: Construct, id: string, config: ProjectIamAuditConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig">ProjectIamAuditConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig">ProjectIamAuditConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.putAuditLogConfig">putAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAuditLogConfig` <a name="putAuditLogConfig" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.putAuditLogConfig"></a>

```typescript
public putAuditLogConfig(value: IResolvable | ProjectIamAuditConfigAuditLogConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIamAuditConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isConstruct"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

projectIamAuditConfig.ProjectIamAuditConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isTerraformElement"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

projectIamAuditConfig.ProjectIamAuditConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isTerraformResource"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

projectIamAuditConfig.ProjectIamAuditConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.generateConfigForImport"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

projectIamAuditConfig.ProjectIamAuditConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectIamAuditConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIamAuditConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIamAuditConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIamAuditConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList">ProjectIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.auditLogConfigInput">auditLogConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: ProjectIamAuditConfigAuditLogConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList">ProjectIamAuditConfigAuditLogConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `auditLogConfigInput`<sup>Optional</sup> <a name="auditLogConfigInput" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.auditLogConfigInput"></a>

```typescript
public readonly auditLogConfigInput: IResolvable | ProjectIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIamAuditConfigAuditLogConfig <a name="ProjectIamAuditConfigAuditLogConfig" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig.Initializer"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

const projectIamAuditConfigAuditLogConfig: projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig.property.logType">logType</a></code> | <code>string</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig.property.exemptedMembers">exemptedMembers</a></code> | <code>string[]</code> | Identities that do not cause logging for this type of permission. |

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#log_type ProjectIamAuditConfig#log_type}

---

##### `exemptedMembers`<sup>Optional</sup> <a name="exemptedMembers" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```typescript
public readonly exemptedMembers: string[];
```

- *Type:* string[]

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#exempted_members ProjectIamAuditConfig#exempted_members}

---

### ProjectIamAuditConfigConfig <a name="ProjectIamAuditConfigConfig" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.Initializer"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

const projectIamAuditConfigConfig: projectIamAuditConfig.ProjectIamAuditConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.auditLogConfig">auditLogConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>[]</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#project ProjectIamAuditConfig#project}. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.service">service</a></code> | <code>string</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#id ProjectIamAuditConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: IResolvable | ProjectIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>[]

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#audit_log_config ProjectIamAuditConfig#audit_log_config}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#project ProjectIamAuditConfig#project}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#service ProjectIamAuditConfig#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/project_iam_audit_config#id ProjectIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectIamAuditConfigAuditLogConfigList <a name="ProjectIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.Initializer"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

new projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.get"></a>

```typescript
public get(index: number): ProjectIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>[]

---


### ProjectIamAuditConfigAuditLogConfigOutputReference <a name="ProjectIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```typescript
import { projectIamAuditConfig } from '@cdktf/provider-google'

new projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">resetExemptedMembers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExemptedMembers` <a name="resetExemptedMembers" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```typescript
public resetExemptedMembers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">exemptedMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">exemptedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exemptedMembersInput`<sup>Optional</sup> <a name="exemptedMembersInput" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```typescript
public readonly exemptedMembersInput: string[];
```

- *Type:* string[]

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `exemptedMembers`<sup>Required</sup> <a name="exemptedMembers" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```typescript
public readonly exemptedMembers: string[];
```

- *Type:* string[]

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectIamAuditConfigAuditLogConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.projectIamAuditConfig.ProjectIamAuditConfigAuditLogConfig">ProjectIamAuditConfigAuditLogConfig</a>

---



