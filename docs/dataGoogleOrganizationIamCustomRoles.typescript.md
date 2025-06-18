# `dataGoogleOrganizationIamCustomRoles` Submodule <a name="`dataGoogleOrganizationIamCustomRoles` Submodule" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOrganizationIamCustomRoles <a name="DataGoogleOrganizationIamCustomRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles google_organization_iam_custom_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

new dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles(scope: Construct, id: string, config?: DataGoogleOrganizationIamCustomRolesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig">DataGoogleOrganizationIamCustomRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig">DataGoogleOrganizationIamCustomRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted">resetShowDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgId` <a name="resetOrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetShowDeleted` <a name="resetShowDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted"></a>

```typescript
public resetShowDeleted(): void
```

##### `resetView` <a name="resetView" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView"></a>

```typescript
public resetView(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOrganizationIamCustomRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOrganizationIamCustomRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOrganizationIamCustomRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput">showDeletedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted">showDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles"></a>

```typescript
public readonly roles: DataGoogleOrganizationIamCustomRolesRolesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `showDeletedInput`<sup>Optional</sup> <a name="showDeletedInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput"></a>

```typescript
public readonly showDeletedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `showDeleted`<sup>Required</sup> <a name="showDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted"></a>

```typescript
public readonly showDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOrganizationIamCustomRolesConfig <a name="DataGoogleOrganizationIamCustomRolesConfig" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.Initializer"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

const dataGoogleOrganizationIamCustomRolesConfig: dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted">showDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view">view</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}.

---

##### `showDeleted`<sup>Optional</sup> <a name="showDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted"></a>

```typescript
public readonly showDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}.

---

### DataGoogleOrganizationIamCustomRolesRoles <a name="DataGoogleOrganizationIamCustomRolesRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles.Initializer"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

const dataGoogleOrganizationIamCustomRolesRoles: dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOrganizationIamCustomRolesRolesList <a name="DataGoogleOrganizationIamCustomRolesRolesList" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

new dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get"></a>

```typescript
public get(index: number): DataGoogleOrganizationIamCustomRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOrganizationIamCustomRolesRolesOutputReference <a name="DataGoogleOrganizationIamCustomRolesRolesOutputReference" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOrganizationIamCustomRoles } from '@cdktf/provider-google'

new dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOrganizationIamCustomRolesRoles;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a>

---



